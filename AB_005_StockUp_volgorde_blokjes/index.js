$(document).ready(function () {
  console.log("ready");

  const newLocationsXT = [
    {
      nummer: 5,
      newLocation: 0,
    },
    {
      nummer: 7,
      newLocation: 1,
    },
    {
      nummer: 9,
      newLocation: 2,
    },
    {
      nummer: 8,
      newLocation: 3,
    },
    {
      nummer: 1,
      newLocation: 4,
    },
    {
      nummer: 4,
      newLocation: 5,
    },
    {
      nummer: 2,
      newLocation: 6,
    },
    {
      nummer: 6,
      newLocation: 7,
    },
    {
      nummer: 3,
      newLocation: 8,
    },
  ];

  const All_xtBlocks = document.getElementsByClassName("XT_block");
  console.log(All_xtBlocks);

  console.log(newLocationsXT);
  let currentMovingTargetXT;
  let targetLocationForMoving;
  for (i = 0; i < newLocationsXT.length; i++) {
    console.log(newLocationsXT[i].nummer);
    //console.log(document.getElementById("location" + newLocationsXT[i].nummer));
    currentMovingTargetXT = document.getElementById("location" + newLocationsXT[i].nummer);

    targetLocationForMoving = document.getElementById("location" + newLocationsXT[i].newLocation);
    //console.log(document.getElementsByClassName("XT_block")[newLocationsXT[i].newLocation]);
    //console.log(All_xtBlocks[newLocationsXT[i].newLocation]);
    $(currentMovingTargetXT).insertBefore(All_xtBlocks[newLocationsXT[i].newLocation]);
  }
});
