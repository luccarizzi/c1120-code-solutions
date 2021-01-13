select    "c"."name" as "categories",
          count(*) as "total"

from      "actors" as "a"

join      "castMembers" as "cm" using ("actorId")

join      "filmCategory" as "fc" using ("filmId")

join      "categories" as "c" using ("categoryId")

where     "firstName" = 'Lisa' and "lastName" = 'Monroe'

group by  "name"
