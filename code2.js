gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDScorePannelObjects1= [];
gdjs.LeaderboardCode.GDScorePannelObjects2= [];
gdjs.LeaderboardCode.GDScorePannelObjects3= [];
gdjs.LeaderboardCode.GDScorePannelObjects4= [];
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDScoreTextObjects3= [];
gdjs.LeaderboardCode.GDScoreTextObjects4= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects4= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects3= [];
gdjs.LeaderboardCode.GDRestartButtonObjects4= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects3= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects4= [];
gdjs.LeaderboardCode.GDScoresButtonObjects1= [];
gdjs.LeaderboardCode.GDScoresButtonObjects2= [];
gdjs.LeaderboardCode.GDScoresButtonObjects3= [];
gdjs.LeaderboardCode.GDScoresButtonObjects4= [];
gdjs.LeaderboardCode.GDDinoObjects1= [];
gdjs.LeaderboardCode.GDDinoObjects2= [];
gdjs.LeaderboardCode.GDDinoObjects3= [];
gdjs.LeaderboardCode.GDDinoObjects4= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects3= [];
gdjs.LeaderboardCode.GDPlatformObjects4= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects3= [];
gdjs.LeaderboardCode.GDBackgroundObjects4= [];
gdjs.LeaderboardCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardCode.GDDustParticlesObjects2= [];
gdjs.LeaderboardCode.GDDustParticlesObjects3= [];
gdjs.LeaderboardCode.GDDustParticlesObjects4= [];
gdjs.LeaderboardCode.GDBackground2Objects1= [];
gdjs.LeaderboardCode.GDBackground2Objects2= [];
gdjs.LeaderboardCode.GDBackground2Objects3= [];
gdjs.LeaderboardCode.GDBackground2Objects4= [];
gdjs.LeaderboardCode.GDBackground3Objects1= [];
gdjs.LeaderboardCode.GDBackground3Objects2= [];
gdjs.LeaderboardCode.GDBackground3Objects3= [];
gdjs.LeaderboardCode.GDBackground3Objects4= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects3);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects3[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects3[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd", true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("HasSubmitScore"), true);
}}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects2[k] = gdjs.LeaderboardCode.GDRestartButtonObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitButtonObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitButtonObjects2[k] = gdjs.LeaderboardCode.GDSubmitButtonObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.LeaderboardCode.GDScoresButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDScoresButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDScoresButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDScoresButtonObjects1[k] = gdjs.LeaderboardCode.GDScoresButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDScoresButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd", true);
}}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("HasSubmitScore"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("2dfc4fba-1e2b-4e07-b3f3-3ee9839ab0dd");
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.LeaderboardCode.GDDustParticlesObjects2});
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12244140);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.LeaderboardCode.GDDinoObjects2);
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDDustParticlesObjects2Objects, (( gdjs.LeaderboardCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDDinoObjects2[0].getPointX("DustProjection")), (( gdjs.LeaderboardCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDDinoObjects2[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDDustParticlesObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.LeaderboardCode.GDDinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.LeaderboardCode.GDDustParticlesObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDDustParticlesObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDDustParticlesObjects1[i].setPosition((( gdjs.LeaderboardCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDDinoObjects1[0].getPointX("DustProjection")),(( gdjs.LeaderboardCode.GDDinoObjects1.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDDinoObjects1[0].getPointY("DustProjection")));
}
}}

}


};gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LeaderboardCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 70, 1);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


gdjs.LeaderboardCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.LeaderboardCode.eventsList5(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScorePannelObjects1.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects2.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects3.length = 0;
gdjs.LeaderboardCode.GDScorePannelObjects4.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects4.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects4.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDScoresButtonObjects4.length = 0;
gdjs.LeaderboardCode.GDDinoObjects1.length = 0;
gdjs.LeaderboardCode.GDDinoObjects2.length = 0;
gdjs.LeaderboardCode.GDDinoObjects3.length = 0;
gdjs.LeaderboardCode.GDDinoObjects4.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects3.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects4.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects4.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects3.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects4.length = 0;
gdjs.LeaderboardCode.GDBackground2Objects1.length = 0;
gdjs.LeaderboardCode.GDBackground2Objects2.length = 0;
gdjs.LeaderboardCode.GDBackground2Objects3.length = 0;
gdjs.LeaderboardCode.GDBackground2Objects4.length = 0;
gdjs.LeaderboardCode.GDBackground3Objects1.length = 0;
gdjs.LeaderboardCode.GDBackground3Objects2.length = 0;
gdjs.LeaderboardCode.GDBackground3Objects3.length = 0;
gdjs.LeaderboardCode.GDBackground3Objects4.length = 0;

gdjs.LeaderboardCode.eventsList6(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
