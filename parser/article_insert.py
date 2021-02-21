import pymysql
import json

def insert_count(values):
    with open('../server/config/db.json') as json_file:
        dbConfig = json.load(json_file)

    connection = pymysql.connect(
        host=dbConfig['HOST'],
        user=dbConfig['USER'],
        passwd=dbConfig['PASSWORD'],
        port=3306,
        db=dbConfig['DB'],
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

    try:
        with connection.cursor() as cursor:
            # Create a new record
            sql = "insert into article(article_date, count) values (%s, %s)"
            cursor.execute(sql, values)

        # connection is not autocommit by default. So you must commit to save
        # your changes.
        connection.commit()

    finally:
        connection.close()

