def model_upside(dividend, risk_free, erp, growth, current_price):
    fair_price = dividend / (risk_free + erp - growth)
    return (fair_price / current_price - 1) * 100

print(model_upside(20, 0.15, 0.06, 0.03, 200))
