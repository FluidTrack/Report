let P1_Name       = document.getElementById(`P1_Name`);
let P1_Info       = document.getElementById(`P1_Info`);
let P1_IdNum      = document.getElementById(`P1_IdNum`);
let P1_DateRange  = document.getElementById(`P1_DateRange`);
let P2_DateRange  = document.getElementById(`P2_DateRange`);
let P3_DateRange  = document.getElementById(`P3_DateRange`);

function getParam(sname) {
  var params = location.search.substr(location.search.indexOf("?") + 1);
  var sval = "";
  params = params.split("&");

  for (var i = 0; i < params.length; i++) {

      temp = params[i].split("=");

      if ([temp[0]] == sname) { sval = temp[1]; }

  }
  if(sval=="") {return null;}
  else  {return sval;}
}

let serverUrl = getParam(`server`)
let targetStr = getParam(`target`)
let range = getParam(`range`)

if(serverUrl == null || targetStr == null || range == null) {
  location.href=`/IllegalApproach`;
}

let userData = null
let startDate = new Date();
let endDate = new Date();

let loadData = () => {
  console.log(`User ID ${targetID} / User Name :${targetName}`);
  P1_Name.innerHTML = `${targetName} 어린이`
  P1_IdNum.innerHTML = `등록 번호 : ${userData.creation_date.split('-')[0]}_${targetID}`

  let rangeInt = parseInt(range)
  startDate = new Date(userData.creation_date)
  startDate.setTime(startDate.getTime() + (rangeInt*14*24*60*60*1000));
  endDate.setTime(startDate.getTime() +13*24*60*60*1000);
  let subText = "";
  switch(rangeInt){
    case 0 : subText = ` (1,2주차)`; break;
    case 1 : subText = ` (3,4주차)`; break;
    case 2 : subText = ` (5,6주차)`; break;
    case 3 : subText = ` (7,8주차)`; break;
  }
  let rangeText = `${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`
  rangeText += ` ~ ${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`
  rangeText += subText;

  P1_DateRange.innerHTML = rangeText;
  P2_DateRange.innerHTML = rangeText;
  P3_DateRange.innerHTML = rangeText;

  let startDateStamp = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`
  let endDateStamp = `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`

  console.log(`${startDateStamp} ~ ${endDateStamp} 데이터`)

  let str2 = `${targetURL}read_water_logs?id=${targetID}&startRange=${startDateStamp}&endRange=${endDateStamp}`
  //console.log(`water url : ${str2}`)
  jQuery.ajax({
    type:'GET',						// POST 방식으로
    url: `${str2}`,
    processData:false,					// 기본 설정
    contentType: false,					// 기본 설정
    success: function(msg) {			// 성공시
      //console.log(`Water : ${msg}`)
      if (msg != "null") {
        UserWaterData = JSON.parse(msg).WaterLogs;//[0]; //선영: Data array components 전부를 가져오도록 수정함 
      } else {
        UserWaterData = null
      }

      let str3 = `${targetURL}read_drink_logs?id=${targetID}&startRange=${startDateStamp}&endRange=${endDateStamp}`
      //console.log(`drink url : ${str3}`)
      jQuery.ajax({
        type:'GET',						// POST 방식으로
        url: `${str3}`,
        processData:false,					// 기본 설정
        contentType: false,					// 기본 설정
        success: function(msg) {			// 성공시
          //console.log(`Drink : ${msg}`)
          if (msg != "null") {
            UserDrinkData = JSON.parse(msg).DrinkLogs;//[0]; //선영: Data array components 전부를 가져오도록 수정함 
          } else {
            UserDrinkData = null
          }

          let str4 = `${targetURL}read_Poop_logs?id=${targetID}&startRange=${startDateStamp}&endRange=${endDateStamp}`
          //console.log(`poop url : ${str4}`)
          jQuery.ajax({
            type:'GET',						// POST 방식으로
            url: `${str4}`,
            processData:false,					// 기본 설정
            contentType: false,					// 기본 설정
            success: function(msg) {			// 성공시
              //console.log(`Poop : ${msg}`)
              if (msg != "null") {
                UserPoopData = JSON.parse(msg).PoopLogs; //선영: Data array components 전부를 가져오도록 수정함
              } else {
                UserPoopData = null
              }

              let str5 = `${targetURL}read_Pee_logs?id=${targetID}&startRange=${startDateStamp}&endRange=${endDateStamp}`
              //console.log(`pee url : ${str5}`)
              jQuery.ajax({
                type:'GET',						// POST 방식으로
                url: `${str5}`,
                processData:false,					// 기본 설정
                contentType: false,					// 기본 설정
                success: function(msg) {			// 성공시
                  //console.log(`Pee : ${msg}`)
                  if (msg != "null") {
                    UserPeeData = JSON.parse(msg).PeeLogs; //선영: Data array components 전부를 가져오도록 수정함 
                  } else {
                    UserPeeData = null
                  }

                  let str6 = `${targetURL}read_Water_logs?id=${targetID}`
                  //console.log(`total water url : ${str6}`)
                  jQuery.ajax({
                    type:'GET',						// POST 방식으로
                    url: `${str6}`,
                    processData:false,					// 기본 설정
                    contentType: false,					// 기본 설정
                    success: function(msg) {			// 성공시
                      //console.log(`Water Total : ${msg}`)
                      if (msg != "null") {
                        UserTotalWaterData = JSON.parse(msg).WaterLogs; 
                      } else {
                        UserTotalWaterData = null
                      }

                      let str7 = `${targetURL}read_Drink_logs`
                      //console.log(`total drink url : ${str7}`)
                      jQuery.ajax({
                        type:'GET',						// POST 방식으로
                        url: `${str7}`,
                        processData:false,					// 기본 설정
                        contentType: false,					// 기본 설정
                        success: function(msg) {			// 성공시
                          //console.log(`Drink Total : ${msg}`)
                          if (msg != "null") {
                            UserTotalDrinkData = JSON.parse(msg).DrinkLogs; //선영: Data array components 전부를 가져오도록 수정함 
                          } else {
                            UserTotalDrinkData = null
                          }

                          let str8 = `${targetURL}read_Pee_logs`
                          //console.log(`total pee url : ${str8}`)
                          jQuery.ajax({
                            type:'GET',						// POST 방식으로
                            url: `${str8}`,
                            processData:false,					// 기본 설정
                            contentType: false,					// 기본 설정
                            success: function(msg) {			// 성공시
                              //console.log(`Pee Total : ${msg}`)
                              if (msg != "null") {
                                UserTotalPeeData = JSON.parse(msg).PeeLogs; //선영: Data array components 전부를 가져오도록 수정함 
                              } else {
                                UserTotalPeeData = null
                              }

                              let str9 = `${targetURL}read_Poop_logs`
                              //console.log(`total poop url : ${str9}`)
                              jQuery.ajax({
                                type:'GET',						// POST 방식으로
                                url: `${str9}`,
                                processData:false,					// 기본 설정
                                contentType: false,					// 기본 설정
                                success: function(msg) {			// 성공시
                                  //console.log(`Poop Total : ${msg}`)
                                  if (msg != "null") {
                                    UserTotalPoopData = JSON.parse(msg).PoopLogs; //선영: Data array components 전부를 가져오도록 수정함 
                                  } else {
                                    UserTotalPoopData = null
                                  }

                                  DataLoadComplete(startDateStamp, rangeInt, userData.creation_date, userData.id);
                                },error: function(msg) {			// 실패시
                                  location.href=`/ConnectFail`;
                                }
                              });
                            },error: function(msg) {			// 실패시
                              location.href=`/ConnectFail`;
                            }
                          });
                        },error: function(msg) {			// 실패시
                          location.href=`/ConnectFail`;
                        }
                      });
                    },error: function(msg) {			// 실패시
                      location.href=`/ConnectFail`;
                    }
                  });
                },error: function(msg) {			// 실패시
                  location.href=`/ConnectFail`;
                }
              });
            },error: function(msg) {			// 실패시
              location.href=`/ConnectFail`;
            }
          });
        },error: function(msg) {			// 실패시
          location.href=`/ConnectFail`;
        }
      });
    },error: function(msg) {			// 실패시
      location.href=`/ConnectFail`;
    }
  });
}

let target = parseInt(targetStr);
let targetURL = serverUrl
let targetID = 0;
let targetName = "";


if(isNaN(target)) {
  let str = `${targetURL}read_users?searchName=${targetStr}`
  jQuery.ajax({
    type:'GET',						// POST 방식으로
    url: `${str}`,
    processData:false,					// 기본 설정
    contentType: false,					// 기본 설정
    success: function(msg) {			// 성공시
      try{
        userData = JSON.parse(msg).UserLogs[0];
        targetID = userData.id;
        targetName = userData.name;
        loadData();
      } catch(e) {
        location.href=`/SearchingFail`;
      }

    },error: function(msg) {			// 실패시
      location.href=`/ConnectFail`;
    }
  });
} else {
  let str = `${targetURL}read_users?id=${target}`
  jQuery.ajax({
    type:'GET',						// POST 방식으로
    url: `${str}`,
    processData:false,					// 기본 설정
    contentType: false,					// 기본 설정
    success: function(msg) {			// 성공시
      try{
        userData = JSON.parse(msg).UserLogs[0];
        targetID = userData.id;
        targetName = userData.name;
        loadData();
      } catch(e) {
        location.href=`/SearchingFail`;
      }
    },error: function(msg) {			// 실패시
      //location.href=`/ConnectFail`;
      console.log(str)
    }
  });
}
