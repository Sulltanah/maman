# Data sources and credits

The Ma'man project page shows a few rows and results from three datasets in its interactive demo and screenshots.
This file lists where each dataset comes from and its licence. Where we could not confirm the exact copy we used,
we say so instead of guessing.

## German Credit (`german_credit.csv`)

- **Original dataset:** Statlog (German Credit Data), created by Hans Hofmann (1994).
- **Publisher:** UCI Machine Learning Repository, https://archive.ics.uci.edu/dataset/144 (DOI: 10.24432/C5NC77)
- **Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Citation:** Hofmann, H. (1994). Statlog (German Credit Data) [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5NC77
- **Copy used:** 1,000 rows, 21 columns. The column names (e.g. `checking_status`, `installment_commitment`) match the
  OpenML "credit-g" version of this dataset (https://www.openml.org/d/31). The exact download location of our copy
  was not recorded.
- **Changes on this site:** none to the data; the page shows its first rows and results from Ma'man's analysis.

## Adult (`adult.csv` on the site; `adult_preprocessed.csv` in the project)

- **Original dataset:** Adult (also known as "Census Income"), by Barry Becker and Ronny Kohavi (1996).
- **Publisher:** UCI Machine Learning Repository, https://archive.ics.uci.edu/dataset/2/adult (DOI: 10.24432/C5XW20)
- **Licence:** Creative Commons Attribution 4.0 International (CC BY 4.0)
- **Citation:** Becker, B. & Kohavi, R. (1996). Adult [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20
- **Copy used:** a **preprocessed copy** (32,561 rows, 15 columns, column names with underscores such as
  `education_num`). We cannot confirm where this preprocessed copy was downloaded from, or exactly what
  preprocessing was applied beyond the column naming.
- **Changes on this site:** none to the data; the page shows its first rows and results computed by Ma'man's risk
  engine.

## SDAIA budget 2022 (`sdaia_budget_2022.csv`)

- **Original dataset:** budgets of the Saudi Data and Artificial Intelligence Authority (SDAIA) for 2022
  (Arabic title in the file: «ميزانيات الهيئة السعودية للبيانات والذكاء الاصطناعي للعام (2022م)»).
- **Publisher:** Saudi Data and Artificial Intelligence Authority, via the Saudi Open Data Platform. The matching
  dataset there is "The budgets of Saudi Data and AI Authority for the years (2022 and 2023)":
  https://od.data.gov.sa/Data/en/dataset/the-budgets-of-saudi-data-and-ai-authority-for-the-years-2022-and-2023
- **Licence:** Saudi Open Data License (https://open.data.gov.sa/en/pages/policies/license), which allows
  distributing and transforming the data and requires that the source be mentioned.
- **Copy used:** the 2022 table (5 rows, 5 columns). We cannot confirm the exact file or download location of our copy.
- **Changes on this site:** none; the page shows the table as published and Ma'man's assessment of it.

## Other names

Qwen, MLX, multilingual E5 and Streamlit are named on the page to describe how Ma'man is built. They belong to their
respective owners.

---
© 2026 Sultanah Alotaibi, Wafa Alotaibi and Samar Alfallaj. All rights reserved.
