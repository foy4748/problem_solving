import pandas as pd

def delete_duplicate_emails(person: pd.DataFrame) -> None:
    cleaned = person.drop_duplicates(subset='email',keep='first')
    return pd.DataFrame(cleaned)

csv = pd.read_csv('./csv/duplicate_emails.csv')
df  = pd.DataFrame(csv)

print(delete_duplicate_emails(df))
