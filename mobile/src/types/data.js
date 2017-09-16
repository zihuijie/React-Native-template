/* data types */
// @flow
export type CoinMarketCapData ={
  id: string,
  name: string,
  symbol: string,
  rank: '33',
  price_usd: '25.9309',
  price_btc: string,
  '24h_volumne_usd': string,
  market_cap_usd: string,
  available_supply: string,
  total_supply: string,
  percent_change_1h: string,
  percent_change_24h: string,
  percent_change_7d: string,
  last_updated: string,
};

export type ThemeColorsData = {
  red: string,
  green: string,
  darkGray: string,
  greyOutline: string,
  primary: string,
  lightGrey: string,
  white: string,
  tabBarColor: string,
  cardBackground: string,
  headerTitleColor: string,
  textColor: string,
  thumbTintColor: string,
};

export type HoldingData = {
  priceTotalPay: string,
  priceByCoin: string,
  amountOfCoin: string,
  name: any,
  dateBuy: Date,
  id: any,
};
