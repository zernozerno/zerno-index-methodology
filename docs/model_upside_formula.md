# Формула расчёта modelUpside

Модель оценивает справедливую стоимость акции с учётом:

- ключевой ставки ЦБ
- ERP (премии за риск)
- прогнозируемого роста прибыли
- дивидендного потока

FairPrice = Dividend / (RiskFree + ERP - Growth)
modelUpside = (FairPrice / CurrentPrice - 1) × 100%
