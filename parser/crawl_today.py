import requests
import datetime
from bs4 import BeautifulSoup

from article_insert import insert_count

def convert_dates(start_date, end_date):
    cur_date = start_date
    str_date = cur_date.strftime('%Y%m%d')
    str_dates = [str_date]

    while (cur_date != end_date):
        cur_date += datetime.timedelta(days=1)
        str_date = cur_date.strftime('%Y%m%d')
        str_dates.append(str_date)
    return str_dates


def _create_urls(keyword, str_dates):
    urls = list(map(lambda d:
                    f"https://search.daum.net/search?w=news&DA=PGD&enc=utf8&cluster=y&cluster_page=1&q={keyword}&period=d&sd={d}000000&ed={d}235959&p=1",
                    str_dates))
    return urls


def parse(keyword, yesterDay):
    url = f"https://search.daum.net/search?w=news&DA=PGD&enc=utf8&cluster=y&cluster_page=1&q={keyword}&period=d&sd={yesterDay}000000&ed={yesterDay}235959&p=1"
    try:
        req = requests.get(f"{url}")
        html = req.text
        # is_ok = r eq.ok
        soup = BeautifulSoup(html, 'html.parser')
        value = soup.select_one("#resultCntArea")
        # print(url)

        # if there no result of query selecting
        if not value:
            raise Exception(
                "there no result of query selecting, check the Daum UI changes")
        else:
            temp = str(value)
            pivot = "약 " if '약' in temp else '/ '
            count = temp.split(f"{pivot}")[1].split("건")[0]

    except Exception as e:
        print(e)
    count = int(count.replace(',', ''))
    return count


def create_date():
    today = datetime.datetime.today()
    yesterday = today - datetime.timedelta(days=1)
    return yesterday.strftime('%Y%m%d')


if __name__ == '__main__':
    keyword = "코로나"
    date = create_date()
    rst = parse(keyword, date)
    insert_count([date, rst])