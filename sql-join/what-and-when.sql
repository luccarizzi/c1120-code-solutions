select  "films"."title" as "film",
        "films"."releaseYear",
        "categories"."name"

from    "filmCategory"

join    "films"
on      "films"."filmId" = "filmCategory"."filmId"

join    "categories"
on      "categories"."categoryId" = "filmCategory"."categoryId"

where   "title" = 'Boogie Amelie';
