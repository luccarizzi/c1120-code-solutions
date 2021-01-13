select    "c"."firstName" as "First Name",
          "c"."lastName" as "Last Name",
          sum("p"."amount") as "payment"
from      "payments" as "p"
join       "customers" as "c" using ("customerId")
group by  "firstName", "lastName"
