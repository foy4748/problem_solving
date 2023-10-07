import pandas as pd

def categorize_products(activities: pd.DataFrame) -> pd.DataFrame:
    activities.drop_duplicates(subset=['sell_date','product'],keep='first',inplace=True)
    grouped = activities.groupby('sell_date').agg({'product':'nunique'}).reset_index()
    # df = grouped['product'].count().reset_index()
    # df['products'] = grouped['product'].apply(lambda x: x)
    return grouped

csv = pd.read_csv('./csv/group_products.csv')
print(categorize_products(pd.DataFrame(csv)))
