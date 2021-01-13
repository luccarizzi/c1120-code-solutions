select  "customers"."firstName",
        "customers"."lastName"

from "films"

join "inventory"
on "inventory"."filmId" = "films"."filmId"

join "rentals"
on "rentals"."inventoryId" = "inventory"."inventoryId"

join "customers"
on "customers"."customerId" = "rentals"."customerId"

where "title" = 'Magic Mallrats';
