var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 1] = "North";
    cardinalDirections[cardinalDirections["East"] = 4] = "East";
    cardinalDirections[cardinalDirections["South"] = 8] = "South";
    cardinalDirections[cardinalDirections["West"] = 9] = "West";
})(cardinalDirections || (cardinalDirections = {}));
;
console.log(cardinalDirections);
var seasons;
(function (seasons) {
    seasons["Spring"] = "spring";
    seasons["Summer"] = "Summer";
    seasons["Fall"] = "Fall";
    seasons[seasons["id"] = 2] = "id";
})(seasons || (seasons = {}));
console.log(seasons);
