import pandas as pd

# https://stackoverflow.com/questions/41287171/iterate-through-dataframe-and-select-null-values

def rearrange_products_table(products: pd.DataFrame) -> pd.DataFrame:
    data = { 'product_id':[], 'store':[], 'price':[] }
    stores = ['store1','store2','store3']
    for idx,row in products.iterrows():
        for store in stores:
            if pd.isnull(row[store]) == False:
                data['product_id'].append(row['product_id'])
                data['store'].append(store)
                data['price'].append(row[store])

    return pd.DataFrame(data)

csv = pd.read_csv('./csv/products.csv')
df  = pd.DataFrame(csv)

print(rearrange_products_table(df))
