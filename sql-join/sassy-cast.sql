select    "actors"."firstName",
          "actors"."lastName"

from      "castMembers"

join      "actors"
on        "actors"."actorId" = "castMembers"."actorId"

join      "films"
on        "films"."filmId" = "castMembers"."filmId"

where     "films"."title" = 'Jersey Sassy';
