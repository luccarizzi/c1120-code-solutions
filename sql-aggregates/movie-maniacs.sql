select  "c"."firstName" as "First Name",
        "c"."lastName" as "Last Name",
        "p". as "payment"


from    "customers" as "c"

-- join    "rentals" as "r" using ("customerId")

join    "payments" as "p" using ("customerId")
