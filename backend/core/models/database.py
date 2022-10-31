import sqlite3

dbURL = "core\\databases\\TestDB_1.db"

def HandleLoginDB(uname, passwd):
    connection = sqlite3.connect(dbURL)
    cur = connection.cursor()

    query = f"""SELECT * FROM users WHERE username = '{uname}' AND password = '{passwd}'"""
    cur.execute(query)
    rows = cur.fetchall()
    # print(rows)

    try:
        if len(rows) == 1:
            userDict = {
                'user_id': rows[0][0],
                'username': rows[0][1],
                'name': rows[0][2],
                'email': rows[0][3]
            }
            # print(userDict)
            return userDict
        else:
            return None
    
    except sqlite3.Error as err:
        print(err)
    finally:
        connection.close()