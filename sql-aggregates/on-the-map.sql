select    "co"."name" as "Country",
          count("ci".*) as "Total Cities"

from      "countries" as "co"

join      "cities" as "ci" using ("countryId")

group by  "co"."countryId"
