# Example model for storing recognition results
# You can expand this as needed

def create_table(conn):
    conn.execute('''
        CREATE TABLE IF NOT EXISTS recognitions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            song_title TEXT,
            artist TEXT,
            result_json TEXT
        )
    ''')
    conn.commit()


# DB models (if using ORM)