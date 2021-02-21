import requests
import datetime
from bs4 import BeautifulSoup
import csv

def convert_dates(start_date, end_date):
    cur_date = start_date
    str_date = cur_date.strftime('%Y%m%d')
    str_dates = [str_date]
    
    while (cur_date != end_date):
        cur_date += datetime.timedelta(days=1)
        str_date = cur_date.strftime('%Y%m%d')
        str_dates.append(str_date)
    return str_dates

def _create_urls(cur_keyword, str_dates):
    urls = list(map(lambda d:
    f"https://search.daum.net/search?w=news&DA=PGD&enc=utf8&cluster=y&cluster_page=1&q={cur_keyword}&period=d&sd={d}000000&ed={d}235959&p=1",
    str_dates))
    return urls

def parse(keywords, str_dates):
    results = {}
    while keywords:
        cur_keyword = keywords.pop()
        # set current keyword as a key. the value is count list
        results[cur_keyword] = []
        urls = _create_urls(cur_keyword, str_dates)

        for url in urls:
            try:
                req = requests.get(f"{url}")
                html = req.text
                # is_ok = req.ok
                soup = BeautifulSoup(html, 'html.parser')
                value = soup.select_one("#resultCntArea")
                print(url)

                # if there no result of query selecting
                if not value:
                    raise Exception("there no result of query selecting, check the Daum UI changes")
                else:
                    temp = str(value)
                    pivot = "약 " if '약' in temp else '/ '
                    count = temp.split(f"{pivot}")[1].split("건")[0]
                print(f"=> {count}")
                results[cur_keyword].append(count)

            except Exception as e:
                print(e)
    return results

def save_csv(results, str_dates):
    try:
        with open('article_counts.csv', 'w', encoding='utf-8', newline='') as writer_csv:
            writer = csv.writer(writer_csv, delimiter=',')
            writer.writerow(['keyword'] + str_dates)

            for keyword, counts in results.items():
                writer.writerow([keyword] + counts)
        print("\nDone!")

    except Exception as e:
        print(e)

if __name__ == '__main__':
    keywords = input("Please enter a search term." +
    "If you have multiple search terms, separate them with commas (no white space)."+
    "\n   ex) python,node,go\n").split(",")
    
    dates = list(map(lambda date:
    datetime.datetime.strptime(str(date), '%Y-%m-%d'),
    input("\nPlease enter start date and end date you want to search." +
    "\n   ex) 2020-09-03,2020-10-10\n").split(",")))

    answer = input(f"\nWhat you entered... \n   keywords => {keywords}\n   dates => {dates}\nGo? Y / else\n")

    if(answer == 'Y'):
        try:
            print("\n...")
            strart_date = dates[0]
            end_date = dates[1]
            str_dates = convert_dates(strart_date, end_date)
            results = parse(keywords, str_dates)
            save_csv(results, str_dates)
        except Exception as e:
            print(e)
