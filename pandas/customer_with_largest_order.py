import pandas as pd

def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    df = orders.groupby('customer_number')['order_number'].count().reset_index()
    result = df[ df['order_number'] == df['order_number'].max()]['customer_number']
    return pd.DataFrame(result)

csv = pd.read_csv('./csv/customer_orders.csv')
df  = pd.DataFrame(csv)

print(largest_orders(df))
