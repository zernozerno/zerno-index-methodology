# Demo API Schema (псевдо)

> Внимание: это демонстрационное описание, а не реальное API ZERNO.

## Примеры эндпоинтов

- `GET /api/index/ltm` — вернуть сводные LTM-показатели индекса  
- `GET /api/index/ntm` — вернуть прогнозные NTM-показатели  
- `GET /api/index/model` — вернуть modelUpside по списку тикеров  

## Ответ (пример, псевдо-JSON)

```json
{
  "meta": {
    "as_of": "2025-11-28",
    "source": "ZERNO demo model"
  },
  "data": [
    {
      "ticker": "GAZP",
      "ltm_yield": 12.3,
      "ntm_yield": 14.7,
      "model_upside": 28.5
    }
  ]
}
