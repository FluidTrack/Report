let UserWaterData = []
let UserDrinkData = []
let UserPoopData = []
let UserPeeData = []

let UserTotalWaterData = []
let UserTotalDrinkData = []
let UserTotalPoopData = []
let UserTotalPeeData = []

let DataLoadComplete = (startDateStamp, range, rangeInt, startDay, creation, id) => {

    if(UserWaterData==null){UserWaterData=[]}
    if(UserDrinkData==null){UserDrinkData=[]}
    if(UserPeeData==null){UserPeeData=[]}
    if(UserPoopData==null){UserPoopData=[]}

    if(UserTotalWaterData==null){UserTotalWaterData=[]}
    if(UserTotalDrinkData==null){UserTotalDrinkData=[]}
    if(UserTotalPoopData==null){UserTotalPoopData=[]}
    if(UserTotalPeeData==null){UserTotalPeeData=[]}

    /* ===============================================================================================================
        Water Log Object

        +-----------+----------+------+-----+---------+----------------+
        | Field     | Type     | Null | Key | Default | Extra          |
        +-----------+----------+------+-----+---------+----------------+
        | log_id    | int(11)  | NO   | PRI | NULL    | auto_increment |
        | id        | int(11)  | YES  |     | NULL    |                |
        | timestamp | datetime | YES  |     | NULL    |                |
        | type      | int(11)  | YES  |     | NULL    |                |
        | auto      | int(11)  | YES  |     | NULL    |                |
        +-----------+----------+------+-----+---------+----------------+
    =============================================================================================================== */
    console.log(`----------------------------------------------------------`);
    console.log(`▼ User Water Data`)
    console.log(UserWaterData)
    console.log(`▼ User Total Water Data`)
    console.log(UserTotalWaterData)
   
    

    /* ===============================================================================================================
        Drink Log Object

        +-----------+----------+------+-----+---------+----------------+
        | Field     | Type     | Null | Key | Default | Extra          |
        +-----------+----------+------+-----+---------+----------------+
        | log_id    | int(11)  | NO   | PRI | NULL    | auto_increment |
        | id        | int(11)  | YES  |     | NULL    |                |
        | timestamp | datetime | YES  |     | NULL    |                |
        | type      | int(11)  | YES  |     | NULL    |                |
        | volume    | int(11)  | YES  |     | NULL    |                |
        | auto      | int(11)  | YES  |     | NULL    |                |
        +-----------+----------+------+-----+---------+----------------+
    =============================================================================================================== */
    console.log(`----------------------------------------------------------`);
    console.log(`▼ User Drink Data`)
    console.log(UserDrinkData)
    console.log(`▼ User Total Drink Data`)
    console.log(UserTotalDrinkData)

    /* ===============================================================================================================
        Poop Log Object

        +-----------+----------+------+-----+---------+----------------+
        | Field     | Type     | Null | Key | Default | Extra          |
        +-----------+----------+------+-----+---------+----------------+
        | log_id    | int(11)  | NO   | PRI | NULL    | auto_increment |
        | id        | int(11)  | YES  |     | NULL    |                |
        | timestamp | datetime | YES  |     | NULL    |                |
        | type      | int(11)  | YES  |     | NULL    |                |
        | auto      | int(11)  | YES  |     | NULL    |                |
        +-----------+----------+------+-----+---------+----------------+
    =============================================================================================================== */
    console.log(`----------------------------------------------------------`);
    console.log(`▼ User Poop Data`)
    console.log(UserPoopData)
    console.log(`▼ User Total Poop Data`)
    console.log(UserTotalPoopData)


    /* ===============================================================================================================
        Pee Log Object

        +-----------+----------+------+-----+---------+----------------+
        | Field     | Type     | Null | Key | Default | Extra          |
        +-----------+----------+------+-----+---------+----------------+
        | log_id    | int(11)  | NO   | PRI | NULL    | auto_increment |
        | id        | int(11)  | YES  |     | NULL    |                |
        | timestamp | datetime | YES  |     | NULL    |                |
        | auto      | int(11)  | YES  |     | NULL    |                |
        +-----------+----------+------+-----+---------+----------------+
    =============================================================================================================== */
    console.log(`----------------------------------------------------------`);
    console.log(`▼ User Pee Data`)
    console.log(UserPeeData)
    console.log(`▼ User Total Pee Data`)
    console.log(UserTotalPeeData)
    console.log(`==========================================================\n`);

    //===============================================================================================================
    // To - Do Section
    // --------------------------------------------------------------------------------------
    //  - 그래프 그리기
    //  - 데이터는 이미 날짜 범위(ex. 1주,2주차 데이터)에 맞게 넘어온 상황
    //  - 사용 가능한 데이터 목록
    //     > UserWaterData : 물 섭취 기록 모음
    //     > UserDrinkData : 음료 섭취 기록 모음
    //     > UserPoopData  : 대변 활동 기록 모음
    //     > UserPeeData   : 소변 활동 기록 모음
    //     > UserTotalWaterData : 물 섭취 전체 기록 모음
    //     > UserTotalDrinkData : 음료 섭취 전체 기록 모음
    //     > UserTotalPoopData  : 대변 활동 전체 기록 모음
    //     > UserTotalPeeData   : 소변 활동 전체 기록 모음
    //===============================================================================================================
    let start = startDateStamp
    let height_P1 = 142;
    let width_P1 = 345;
    let height_P2 = 160;
    let width_P2 = 345;
    let height_P3 = 142;
    let width_P3 = 523;

    
    startDay = parseInt(startDay);
    range = parseInt(range);
    let days=key_days(start); //for daily axis and data matching 
    let dates=getDates(start);
    let xDays=getXDays(start, startDay);
    console.log(xDays)

    let weeks=["1주차", "2주차", "3주차", "4주차", ] //"5주차", "6주차", "7주차", "8주차"
    let hours=key_hours();
    let parsed_hours=parsing_hours(); //for hourly axis

    //find current week's index
    let lastidx;
    switch(rangeInt){
        case 0: lastidx=1; break;
        case 1: lastidx=3; break;
        case 2: lastidx=5; break;
        case 3: lastidx=7; break;
    }

    let W0=new Date(creation);
    W0.setHours(0, 0, 0);
    let W1=week(W0, 1);
    let W2=week(W0, 2);
    let W3=week(W0, 3);
    let W4=week(W0, 4);
    let W5=week(W0, 5);
    let W6=week(W0, 6);
    let W7=week(W0, 7);
    let W8=week(W0, 8);
    W0.setDate(W0.getDate()+startDay)





//-------------------------------------------WATER(daily, weekly, hourly )--------------------------------------------//
   
//DAILY
        let dailyWaterCount=count_Daily(UserWaterData, days);
        let dailyWaterIntake=[]
        for(let i=0; i<dailyWaterCount.length; i++){
            dailyWaterIntake.push(dailyWaterCount[i]*100)
        }
        if(range==0){
            dailyWaterCount = dailyWaterCount.slice(startDay)
            dailyWaterIntake = dailyWaterIntake.slice(startDay)
            //console.log(dailyWaterCount, dailyWaterIntake)
        }

        


            //calculate the max, min, average value of water intake;
        let maxWater=dailyWaterIntake[0];
        let minWater=dailyWaterIntake[0];
        let total_water=0;

        for(let i=0; i<dailyWaterIntake.length; i++){
            temp=dailyWaterIntake[i];

            total_water+=temp;
            if(temp<minWater){minWater=temp;}
            if(temp>maxWater){maxWater=temp;}
        }
        let avgWater=(total_water/14).toFixed(1);

        //console.log(dailyWaterIntake)

   
    

//weekly (normalized)

        let weeklyWaterIntake=[0, 0, 0, 0, ] //8 weeks data // 4 weeks data 0, 0, 0, 0
        let twoWeeksWaterAvg=[0, 0, 0, 0]

            for(let i=0; i<UserTotalWaterData.length; i++){
                if(UserTotalWaterData[i].id==id){
                    let time=new Date(UserTotalWaterData[i].timestamp)
                    if(W0<=time && time<W1){weeklyWaterIntake[0]++}
                    else if(W1<=time && time<W2){weeklyWaterIntake[1]++}
                    else if(W2<=time && time<W3){weeklyWaterIntake[2]++}
                    else if(W3<=time && time<W4){weeklyWaterIntake[3]++}
                    /*else if(W4<=time && time<W5){weeklyWaterIntake[4]++}
                    else if(W5<=time && time<W6){weeklyWaterIntake[5]++}
                    else if(W6<=time && time<W7){weeklyWaterIntake[6]++}
                    else if(W7<=time && time<W8){weeklyWaterIntake[7]++}*/
                }
            }
            console.log(weeklyWaterIntake)
        for(let i=0; i<weeklyWaterIntake.length; i++){
            if(i ==0){
                weeklyWaterIntake[i]=weeklyWaterIntake[i]*100/(7-startDay)
            }
            else{
                weeklyWaterIntake[i]=weeklyWaterIntake[i]*100/7
            }

        }


        for(let i=lastidx+1; i<weeklyWaterIntake.length; i++){
            weeklyWaterIntake[i]=null;
            twoWeeksWaterAvg[i]=null;
        }





//hourly (normalized)
        let hourlyWater=count_parse_hourly(UserWaterData, count_Hourly, hours, parsed_hours, range, startDay);
        let hourlyWaterIntake=hourlyWater[0];
        let parsedHours_water=hourlyWater[1];
        let hourlyWaterIntake_org=hourlyWater[2]


            //count * 100(ml)
        for(let i=0; i<hourlyWaterIntake.length; i++){
            hourlyWaterIntake[i]=hourlyWaterIntake[i]*100;
        }
        for(let i=0; i<hourlyWaterIntake_org.length; i++){
            hourlyWaterIntake_org[i]=hourlyWaterIntake_org[i]*100;
        }

        let hourlyWaterMax=0
        for(let i=0; i<hourlyWaterIntake.length; i++){
            if(hourlyWaterIntake[i]>hourlyWaterMax){
                hourlyWaterMax=hourlyWaterIntake[i]
            }
        }

        //console.log(hourlyWaterIntake, parsedHours_water, hourlyWaterMax);



                        //-------------WATER INTAKE GOAL(for drawing graph-------------------//
                        let goal_water=["목표"];
                        if(range!=0){
                            for(let i=0; i<14; i++){
                                goal_water.push(1000);
                                }
                        }
                        else{
                            for(let i=startDay; i<14; i++){
                                goal_water.push(1000);
                                }
                        }
                        
                        //-------------WATER INTAKE AVERAGE(for drawing graph----------------//

                        let avg_water=["1주평균"];
                        for(let i=0; i<2; i++){
                            avg_water.push(avgWater);
                            }


//-----------------------------------------------DRINK(only daily, weekly)-----------------------------------//

//daily
        let dailyDrinkCount=count_Daily_Drink(UserDrinkData, days);
        console.log(dailyDrinkCount)
        let dailyDrinkIntake=[]
        if(range==0){
            dailyDrinkCount = dailyDrinkCount.slice(startDay)
        }
            
        for(let i=0; i<dailyDrinkCount.length; i++){ //add water logs to drink logs for drawing a graph (daily)
                dailyDrinkIntake.push((dailyDrinkCount[i]+dailyWaterCount[i]*100)); 
        }
        console.log(dailyDrinkIntake)

        let dailymaxDrink=0;
        for(let i=0; i<dailyDrinkIntake.length; i++){
            if(dailyDrinkIntake[i]>dailymaxDrink){
                dailymaxDrink=dailyDrinkIntake[i]
            }
        }

        //console.log(dailymaxDrink)

    


//weekly (normalized)
        let weeklyDrinkIntake=[0, 0, 0, 0, ]; //0, 0, 0, 0

        for(let i=0; i<UserTotalDrinkData.length; i++){
            if(UserTotalDrinkData[i].id==id){
                let time=new Date(UserTotalDrinkData[i].timestamp)
                if(W0<=time && time<W1){weeklyDrinkIntake[0]+=UserTotalDrinkData[i].volume}
                else if(W1<=time && time<W2){weeklyDrinkIntake[1]+=UserTotalDrinkData[i].volume}
                else if(W2<=time && time<W3){weeklyDrinkIntake[2]+=UserTotalDrinkData[i].volume}
                else if(W3<=time && time<W4){weeklyDrinkIntake[3]+=UserTotalDrinkData[i].volume}
                /*else if(W4<=time && time<W5){weeklyDrinkIntake[4]++}
                else if(W5<=time && time<W6){weeklyDrinkIntake[5]++}
                else if(W6<=time && time<W7){weeklyDrinkIntake[6]++}
                else if(W7<=time && time<W8){weeklyDrinkIntake[7]++}*/
            }
        }
        for(let i=0; i<weeklyDrinkIntake.length; i++){
 
            if(i == 0){
                weeklyDrinkIntake[i]=weeklyDrinkIntake[i]/(7-startDay)
            }
            else{
                weeklyDrinkIntake[i]=weeklyDrinkIntake[i]/7
            }
        }


        



        //console.log(weeklyDrinkIntake)
        for(let i=0; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=weeklyDrinkIntake[i]+weeklyWaterIntake[i];
        }
        
        console.log(weeklyDrinkIntake, lastidx)
        for(let i=lastidx+1; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=null
        }

        
        let weeklymaxDrink=0;
        for(let i=0; i<weeklyDrinkIntake.length; i++){
            if(weeklyDrinkIntake[i]>weeklymaxDrink){weeklymaxDrink=weeklyDrinkIntake[i]}
        }


        dailyWaterIntake.unshift("물");
        weeklyWaterIntake.unshift("물")
        hourlyWaterIntake.unshift("물");
        dailyDrinkIntake.unshift("총 수분 (물+음료)")
        weeklyDrinkIntake.unshift("총 수분 (물+음료)")



//-----------------------------------------------Pee(daily, weekly, hourly)-----------------------------------//
//daily

        let dailyPeeCount=count_Daily(UserPeeData, days);
        if(range == 0){
            dailyPeeCount = dailyPeeCount.slice(startDay)
        }
        dailyPeeCount.unshift("배뇨 횟수")
        //console.log(dailyPeeCount);

        let dailyMaxPee=0;
        let dailyMinPee=dailyPeeCount[1]
        let total=0;
        for(let i=1; i<dailyPeeCount.length; i++){
            if(dailyMaxPee<dailyPeeCount[i]){dailyMaxPee=dailyPeeCount[i]}
            if(dailyMinPee>dailyPeeCount[i]){dailyMinPee=dailyPeeCount[i]}
            total+=dailyPeeCount[i];
        }

        //console.log(dailyMaxPee, dailyMinPee, avg_Pee);


//weekly
        //let weeklyPeeCount=["배뇨 횟수", 0, 0, 0, 0, 0, 0, 0, 0]
        let weeklyPeeCount=[0, 0, 0, 0, ] //0, 0, 0, 0

        for(let i=0; i<UserTotalPeeData.length; i++){
            if(UserTotalPeeData[i].id==id){
                let time=new Date(UserTotalPeeData[i].timestamp)
                if(W0<=time && time<W1){weeklyPeeCount[0]++}
                else if(W1<=time && time<W2){weeklyPeeCount[1]++}
                else if(W2<=time && time<W3){weeklyPeeCount[2]++}
                else if(W3<=time && time<W4){weeklyPeeCount[3]++}
                /*else if(W4<=time && time<W5){weeklyPeeCount[4]++}
                else if(W5<=time && time<W6){weeklyPeeCount[5]++}
                else if(W6<=time && time<W7){weeklyPeeCount[6]++}
                else if(W7<=time && time<W8){weeklyPeeCount[7]++}*/
            }
        }
        for(let i=0; i<weeklyPeeCount.length; i++){
            if(i == 0){
                weeklyPeeCount[i]=weeklyPeeCount[i]/(7-startDay)   //.toFixed(0);
            }
            else{
                weeklyPeeCount[i]=weeklyPeeCount[i]/7   //.toFixed(0);
            }

        }


        for(let i=lastidx+1; i<weeklyPeeCount.length; i++){
            weeklyPeeCount[i]=null;
        }


        let weeklyMaxPee=0;
        for(let i=0; i<=lastidx; i++){
            if(weeklyPeeCount[i]>weeklyMaxPee){
                weeklyMaxPee=weeklyPeeCount[i];}
        }

        weeklyPeeCount.unshift("배뇨 횟수")



//hourly (normalized)
        let hourlyPeeMax=0;
        let hourlyPee=count_parse_hourly(UserPeeData, count_Hourly, hours, parsed_hours, range, startDay);
        let hourlyPeeCount=hourlyPee[0];
        let parsedHours_Pee=hourlyPee[1];
        let hourlyPeeCount_org=hourlyPee[2];

        for(let i=0; i<hourlyPeeCount.length; i++){
            hourlyPeeCount[i]=Number(hourlyPeeCount[i])
            if(hourlyPeeMax<hourlyPeeCount[i]){hourlyPeeMax=hourlyPeeCount[i]}
        }


        hourlyPeeCount.unshift("배뇨 횟수");
        //(hourlyPeeCount, hourlyPeeMax)
        //console.log(hourlyPeeCount, parsedHours_Pee);

//-----------------------------------------------Poop(daily, weekly)-----------------------------------//


//DAILY
        let dailyPoopArray=count_daily_Poop(UserPoopData, days)
        let dailyMaxPoop=0;
        for(let i=0; i<dailyPoopArray.length; i++){
            if(dailyPoopArray[i].length>dailyMaxPoop){dailyMaxPoop=dailyPoopArray[i].length}
        }

        let dailyPoopCount=[];
        for(let i=0; i<dailyPoopArray.length; i++){
            dailyPoopCount[i]=dailyPoopArray[i].length
        }

        if(range == 0){
            dailyPoopCount = dailyPoopCount.slice(startDay)
            dailyPoopArray = dailyPoopArray.slice(startDay)
        }

//WEEKLY
        let weeklyPoopCount=[0, 0, 0, 0, ] //8 weeks data //0, 0, 0, 0
        let weeklyHealthyPoopCount=[0, 0, 0, 0, ] //0, 0, 0, 0

        for( let i=0; i<UserTotalPoopData.length; i++){
            valid=false;
            idx=-1;
            if(UserTotalPoopData[i].type>8 || UserTotalPoopData[i].type<0){
                console.log("WRONG POOP TYPE INPUT!!");
                continue;
            }
            if(UserTotalPoopData[i].id==id){
                let time=new Date(UserTotalPoopData[i].timestamp)
                if(W0<=time && time<W1){weeklyPoopCount[0]++; valid=true; idx=0;}
                else if(W1<=time && time<W2){weeklyPoopCount[1]++; valid=true; idx=1;}
                else if(W2<=time && time<W3){weeklyPoopCount[2]++; valid=true; idx=2;}
                else if(W3<=time && time<W4){weeklyPoopCount[3]++; valid=true; idx=3;}
                /*else if(W4<=time && time<W5){weeklyPoopCount[4]++; valid=true; idx=4;}
                else if(W5<=time && time<W6){weeklyPoopCount[5]++; valid=true; idx=5;}
                else if(W6<=time && time<W7){weeklyPoopCount[6]++; valid=true; idx=6;}
                else if(W7<=time && time<W8){weeklyPoopCount[7]++; valid=true; idx=7;}*/

                if(valid && (UserTotalPoopData[i].type==3||UserTotalPoopData[i].type==4)){
                    weeklyHealthyPoopCount[idx]++
                }
            }
        }

        for(let i=lastidx+1; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=null;
            weeklyHealthyPoopCount[i]=null;
        }
        //console.log(weeklyPoopCount)
        let weeklyMaxPoop=Math.max.apply(null, weeklyPoopCount)

        
        dailyPoopCount.unshift("대변")
        weeklyPoopCount.unshift('총 배변 횟수')
        weeklyHealthyPoopCount.unshift('건강한 배변 횟수')

 //------------------------------------------Post doctor's opinion to html page------------------------------------------------// 
        let P1_comment = document.getElementById("P1_CommentTextArea")
        let P2_comment = document.getElementById("P2_CommentTextArea")
        let P3_comment = document.getElementById("P3_CommentTextArea")
        let P1_text = ""
        let P2_text = ""
        let P3_text = ""

        //P1 comment
        {
            //일일 목표 달성 여부 
            let numWaterGoal=0;

            for( let i=1; i<dailyWaterIntake.length; i++){
                if(dailyWaterIntake[i]>=1000){numWaterGoal++}
            }

            if(numWaterGoal==0){
                P1_text+="- 일일 물 섭취량 목표 1000ml를 달성한 날이 없습니다. "
            }
            else{
                P1_text+=`- 일일 물 섭취량 목표 1000ml를 달성한 날이 ${numWaterGoal}일 있습니다. `
            }

            //2주 평균 섭취량 코멘트
            if(avgWater>1000){
                P1_text+=`일일 평균 물 섭취량이 ${avgWater}ml로 목표보다 ${(avgWater-1000).toFixed(1)}ml 많습니다.\n`
            }
            else if(avgWater==1000){
                P1_text+="일일 평균 물 섭취량이 목표와 동일합니다.\n"
            }
            else{
                P1_text+=`일일 평균 물 섭취량이 ${avgWater}ml로 목표보다 ${(1000-avgWater).toFixed(1)}ml 적습니다.\n`
            }

            //2주 평균 섭취량 평균 코멘트

            let curWeek1 = (rangeInt)*2+1
            let curWeek2 = (rangeInt)*2+2
            let curWeek1_water = Number(weeklyWaterIntake[curWeek1].toFixed(1))
            let curWeek2_water = Number(weeklyWaterIntake[curWeek2].toFixed(1))
            let sameWaterorNot = false

            if(curWeek2_water > curWeek1_water){
                P1_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 일일 평균 물 섭취량은 ${(curWeek2_water-curWeek1_water).toFixed(1)}ml 증가했고, `
            }
            else if(curWeek2_water == curWeek1_water){
                P1_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 일일 평균 물 섭취량은 변함 없고, `
                sameWaterorNot = true
                
            }
            else if(curWeek2_water < curWeek1_water){
                P1_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 일일 평균 물 섭취량은 ${(curWeek1_water-curWeek2_water).toFixed(1)}ml 감소했고, `
            }


            let curWeek1_totalDrink = Number(weeklyDrinkIntake[curWeek1].toFixed(1))
            let curWeek2_totalDrink = Number(weeklyDrinkIntake[curWeek2].toFixed(1))

            
            if(sameWaterorNot == false){
                if(curWeek2_totalDrink > curWeek1_totalDrink){
                    P1_text+=`일일 평균 총 수분 섭취량은 ${(curWeek2_totalDrink - curWeek1_totalDrink).toFixed(1)}ml 증가했습니다.`
                }
                else if(curWeek2_totalDrink == curWeek1_totalDrink){
                    P1_text+=`일일 평균 총 수분 섭취량은 변함 없습니다.`
                }
                else if(curWeek2_totalDrink < curWeek1_totalDrink){
                    console.log(curWeek2_totalDrink, curWeek1_totalDrink)
                    P1_text+=`일일 평균 총 수분 섭취량은 ${(curWeek1_totalDrink - curWeek2_totalDrink).toFixed(1)}ml 감소했습니다.`
                }
            }
            else if(sameWaterorNot == true){
                if(curWeek2_totalDrink > curWeek1_totalDrink){
                    P1_text+=`일일 평균 총 수분 섭취량은 ${(curWeek2_totalDrink-curWeek1_totalDrink).toFixed(1)}ml 증가했습니다.`
                }
                else if(curWeek2_totalDrink == curWeek1_totalDrink){
                    P1_text+=`일일 평균 총 수분 섭취량도 변함 없습니다.`
                }
                else if(curWeek2_totalDrink < curWeek1_totalDrink){
                    P1_text+=`일일 평균 총 수분 섭취량은 ${(curWeek1_totalDrink-curWeek2_totalDrink).toFixed(1)}ml 감소했습니다.`
                }
            }


            let curWeek1_drink = curWeek1_totalDrink - curWeek1_water
            let curWeek2_drink = curWeek2_totalDrink - curWeek2_water

            if(curWeek2_drink > curWeek1_drink){
                P1_text+=` ${curWeek1}주차보다 ${curWeek2}주차에서 음료의 비중이 높아졌습니다.\n`
            }
            else{
                P1_text+=`\n`
            }

            //물 시간대별 코멘트

            let dawnWater = 0;
            let morningWater = 0;
            let lunchWater = 0;
            let afternoonWater = 0;
            let dinnerWater = 0;
            let nightWater = 0;

            for(let i=0; i<hourlyWaterIntake_org.length; i++){
                if(i>=6 && i<9){
                    dawnWater+=hourlyWaterIntake_org[i]
                }
                else if(i>=9 && i<12){
                    morningWater+=hourlyWaterIntake_org[i]

                }
                else if(i>=12 && i<15){
                    lunchWater+=hourlyWaterIntake_org[i]

                }
                else if(i>=15 && i<18){
                    afternoonWater+=hourlyWaterIntake_org[i]

                }
                else if(i>=18 && i<21){
                    dinnerWater+=hourlyWaterIntake_org[i]

                }
                else if(i>=21 && i<24){
                    nightWater+=hourlyWaterIntake_org[i]
                }
            }

            let waterSeries = [dawnWater, morningWater, lunchWater, afternoonWater, dinnerWater, nightWater]
            let waterSeries_str = ["새벽", "아침", "점심", "낮", "저녁", "밤"]
            timeWaterMax = 0;
            timeWaterMax_str = '새벽'
            timeWaterMin = waterSeries[0];
            timeWaterMin_str = '새벽'
            for(let i=0; i<waterSeries.length; i++){
                if(waterSeries[i]>timeWaterMax){
                    timeWaterMax = waterSeries[i]
                    timeWaterMax_str = waterSeries_str[i]
                }
                if(waterSeries[i]<timeWaterMin){
                    timeWaterMin = waterSeries[i]
                    timeWaterMin_str = waterSeries_str[i]
                }

            }
            
            P1_text+=`- ${timeWaterMax_str} 시간대에 평균 물 섭취량의 총합이 ${timeWaterMax.toFixed(1)}ml로 가장 많으며, ${timeWaterMin_str} 시간대에 ${timeWaterMin.toFixed(1)}ml로 가장 적습니다.
    `
            P1_comment.innerHTML = P1_text

        }

        //P2 comment
        {
            let curWeek1 = (rangeInt)*2+1
            let curWeek2 = (rangeInt)*2+2


            //일별 코멘트
            let numPeeGoal=0;
            for(let i=1; i<dailyPeeCount.length; i++){
                if(dailyPeeCount[i]>=4 && dailyPeeCount[i]<=7){
                    numPeeGoal++;
                }
            }
            if(numPeeGoal!=0){
                P2_text+=`- 배뇨 횟수가 정상범위 4-7회에 해당하는 날이 ${numPeeGoal}일 있습니다.\n`
            }
            else if(numPeeGoal==0){
                P2_text+=`- 배뇨 횟수가 정상범위 4-7회에 해당하는 날이 없습니다.\n`
            }
            else{
                P2_text+=`ERROR`
            }
            
            //주차별 코멘트
            let curWeek1_pee = Number(weeklyPeeCount[curWeek1].toFixed(1));
            let curWeek2_pee = Number(weeklyPeeCount[curWeek2].toFixed(1));
            if(curWeek2_pee > curWeek1_pee){
                P2_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 평균 배뇨 횟수가 ${(curWeek2_pee-curWeek1_pee).toFixed(1)}회 증가하였습니다. `
            }
            else if(curWeek2_pee == curWeek1_pee){
                P2_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 평균 배뇨 횟수가 변함 없습니다. `
            }
            else if(curWeek2_pee <curWeek1_pee){
                P2_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 평균 배뇨 횟수가 ${(curWeek1_pee-curWeek2_pee).toFixed(1)}회 감소하였습니다. `
            }

            let normalPeeWeeks = [];
            for(let i=curWeek1; i<=curWeek2; i++){
                if(weeklyPeeCount[i]>=4 && weeklyPeeCount[i]<=7)
                {
                    normalPeeWeeks.push(i)
                }
            }
            if(normalPeeWeeks.length == 0){
                P2_text+=`${curWeek1}, ${curWeek2}주차의 일일 평균 배뇨 횟수가 정상범위 4-7회에 해당하지 않습니다.\n`
            }
            else if(normalPeeWeeks.length == 1){
                P2_text+=`${normalPeeWeeks[0]}주차의 일일 평균 배뇨 횟수가 정상범위 4-7회에 해당합니다.\n`
            }
            else if(normalPeeWeeks.length == 2){
                P2_text+=`${normalPeeWeeks[0]}, ${normalPeeWeeks[1]}주차의 일일 평균 배뇨 횟수가 정상범위 4-7회에 해당합니다.\n`
            }
            else{
                P2_text+="ERROR"
            }

            //시간대별 코멘트
            let dawnPee = 0;
            let morningPee = 0;
            let lunchPee = 0;
            let afternoonPee = 0;
            let dinnerPee = 0;
            let nightPee = 0;

            for(let i=0; i<hourlyPeeCount_org.length; i++){
                if(i>=6 && i<9){
                    dawnPee+=hourlyPeeCount_org[i]
                }
                else if(i>=9 && i<12){
                    morningPee+=hourlyPeeCount_org[i]

                }
                else if(i>=12 && i<15){
                    lunchPee+=hourlyPeeCount_org[i]

                }
                else if(i>=15 && i<18){
                    afternoonPee+=hourlyPeeCount_org[i]

                }
                else if(i>=18 && i<21){
                    dinnerPee+=hourlyPeeCount_org[i]

                }
                else if(i>=21 && i<24){
                    nightPee+=hourlyPeeCount_org[i]
                }
            }

            let peeSeries = [dawnPee, morningPee, lunchPee, afternoonPee, dinnerPee, nightPee]
            let peeSeries_str = ["새벽", "아침", "점심", "낮", "저녁", "밤"]
            timePeeMax = 0;
            timePeeMax_str = '새벽'
            timePeeMin = peeSeries[0];
            timePeeMin_str = '새벽'
            for(let i=0; i<peeSeries.length; i++){
                if(peeSeries[i]>timePeeMax){
                    timePeeMax = peeSeries[i]
                    timePeeMax_str = peeSeries_str[i]
                }
                if(peeSeries[i]<timePeeMin){
                    timePeeMin = peeSeries[i]
                    timePeeMin_str = peeSeries_str[i]
                }

            }
            P2_text+=`- ${timePeeMax_str} 시간대에 평균 배뇨 횟수의 총합이 ${timePeeMax.toFixed(1)}회로 가장 많으며, ${timePeeMin_str} 시간대에 ${timePeeMin.toFixed(1)}회로 가장 적습니다.`


            P2_comment.innerHTML = P2_text
        }


        //p3 comment 
        {
            let curWeek1 = (rangeInt)*2+1
            let curWeek2 = (rangeInt)*2+2

            //daily comment
            let totalPoop = 0
            let totalHealthyPoop = 0
            for(let i=curWeek1; i<= curWeek2; i++){
                totalPoop+=weeklyPoopCount[i];
                totalHealthyPoop+=weeklyHealthyPoopCount[i];
            }
            P3_text+=`- 총 ${totalPoop}회 배변하였고, 그 중에서 건강한 대변을 본 것은 ${totalHealthyPoop}회입니다.\n`

            
            //weekly comment
            let checkStayorNot = false;
            if(weeklyPoopCount[curWeek2] > weeklyPoopCount[curWeek1]){
                P3_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 총 배변 횟수는 ${weeklyPoopCount[curWeek2] -weeklyPoopCount[curWeek1]}회 증가했고, `
            }
            else if(weeklyPoopCount[curWeek2] < weeklyPoopCount[curWeek1]){
                P3_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 총 배변 횟수는 ${weeklyPoopCount[curWeek1] -weeklyPoopCount[curWeek2]}회 감소했고, `
            }
            else if(weeklyPoopCount[curWeek2] == weeklyPoopCount[curWeek1]){
                P3_text+=`- ${curWeek1}주차에 비해 ${curWeek2}주차의 총 배변 횟수는 변함 없고, `
                checkStayorNot = true
            }


            if(weeklyHealthyPoopCount[curWeek2] > weeklyHealthyPoopCount[curWeek1]){
                P3_text+=`건강한 배변 횟수는 ${weeklyHealthyPoopCount[curWeek2] -weeklyHealthyPoopCount[curWeek1]}회 증가했습니다.`
            }
            else if(weeklyHealthyPoopCount[curWeek2] < weeklyHealthyPoopCount[curWeek1]){
                P3_text+=`건강한 배변 횟수는 ${weeklyHealthyPoopCount[curWeek1] -weeklyHealthyPoopCount[curWeek2]}회 감소했습니다.`
            }
            else if(weeklyHealthyPoopCount[curWeek2] == weeklyHealthyPoopCount[curWeek1]){
                if(checkStayorNot = false){
                    P3_text+=`건강한 배변 횟수는 변함 없습니다.`
                }
                else{
                    P3_text+=`건강한 배변 횟수도 변함 없습니다.`
                }
                

            }
            
        

            P3_comment.innerHTML = P3_text

        }
 

//-------------------------------------------------Basic Tick Design----------------------------------------------------------//
        setTimeout(function(){

            let elem0=$(".bb-axis-y").find(".tick").find("line").each(function(i){
                $(this).remove()
            })

            let elem1=$(".bb-axis-x").find(".tick").find("line").each(function(i){
                d3.select(this).style("opacity", 0.5)
            })
    
        })





//P1 Graphs
//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//


        //Water Daily Y axis, grid array setting
        let P1DG_maxY;
        let P1DG_grid=[];
        let P1DG_Y=[];
        //console.log(dailymaxDrink)
        if(dailymaxDrink>=2000){
            //console.log(dailymaxDrink)
            if(dailymaxDrink%600==0){
                P1DG_maxY = dailymaxDrink;
            }
            else{
                P1DG_maxY = dailymaxDrink+(600-(dailymaxDrink%600))

            }
        }
        else{
            if (dailymaxDrink%300==0){
                P1DG_maxY = dailymaxDrink
            }
            else{
                P1DG_maxY = dailymaxDrink+(300-(dailymaxDrink%300));
            }

        }
        if(1200>P1DG_maxY){P1DG_maxY=1200;}


            //grid, Y axis label

        if(P1DG_maxY>=2000){        
            for(let i=0; i<=(P1DG_maxY/600); i++){
                P1DG_grid.push({"value":i*600})
                P1DG_Y.push(i*600)
            }
        }
        else{
            for(let i=0; i<=(P1DG_maxY/300); i++){
                P1DG_grid.push({"value":i*300})
                P1DG_Y.push(i*300)
            }
        }


        //Water Weekly Y axis, grid array setting
        let P1WG_maxY;
        let P1WG_grid=[];
        let P1WG_Y=[];
        if(weeklymaxDrink>=2000){
            if(weeklymaxDrink%600==0){
                P1WG_maxY = weeklymaxDrink;
            }
            else{
                P1WG_maxY = weeklymaxDrink+(600-(dailymaxDrink%600))
            }
        }
        else{
            if (dailymaxDrink%300==0){
                P1WG_maxY = weeklymaxDrink
            }
            else{
                P1WG_maxY = weeklymaxDrink+(300-(weeklymaxDrink%300));
            }

        }
        if(1200>P1WG_maxY){P1WG_maxY=1200;}

        
            //grid, Y axis label
        if(P1WG_maxY>=2000){
            for(let i=0; i<=(P1WG_maxY/600); i++){
                P1WG_grid.push({"value":i*600})
                P1WG_Y.push(i*600);
            }
        }
        else{
            for(let i=0; i<=(P1WG_maxY/300); i++){
                P1WG_grid.push({"value":i*300})
                P1WG_Y.push(i*300);
            }

        }


        //adjusting the number of two graphs' grid lines
        if(P1DG_maxY>=P1WG_maxY)
        {
            P1WG_maxY=P1DG_maxY;
            P1WG_grid=P1DG_grid;
            P1WG_Y=P1DG_Y;
        }
        else if(P1DG_maxY<P1WG_maxY){
            P1DG_maxY=P1WG_maxY;
            P1DG_grid=P1WG_grid;
            P1DG_Y=P1WG_Y;
        }
        else{
            console.log("ERROR")
        }
        
        //console.log(P1DG_grid, P1WG_grid)


        

    var P1_DailyGraph = bb.generate({
        size: {
                height: height_P1,
                width: width_P1,
        },
        padding: {
                top: 20,
                right: 30,
                left: 30,
                bottom: 0,

            },
        data: {
                
                columns: 

                    [
                        goal_water,
                        dailyWaterIntake,
                        dailyDrinkIntake,
                    ],
                axes:{
                    "물":"y",
                    "총 수분 (물+음료)":"y",
                },
                
                types: {
                        "물": "bar",
                        "총 수분 (물+음료)": "bar",
                        "목표":"line",
                    }
                    ,
                colors:{
                        "물": "#56A4FF",
                        "총 수분 (물+음료)": "#DEDEDE",
                        "목표":"#03C52E",
                    },  
                labels:{
                    show:true,
                    format:function(d,i, j){ //d=value i=dataId j=dataIndex
                        if(i=="물"){
                            if(d==maxWater||d==minWater){return d;} //show only minimum and miximum value of water intake. 
                        }
                    },
                }
                        
            },
 
        onrendered: function() {
            console.log(document.getElementById("P1_DailyGraph"));

            
            
            //increase stroke line's length
            setTimeout(function(){
                let temp1=document.getElementById("P1_DailyGraph").getElementsByClassName("bb-line-목표") //.find(".bb-line-평균")
                let text1=temp1[0].getAttribute("d")
         
                let regStart = new RegExp(/M\d+\,/)
                let regLast = new RegExp(/L\d+\,/g)
                let start = text1.match(regStart)[0]
                let last = text1.match(regLast)
                last = last[last.length-1]
                console.log(start, last)

                let text_2 = text1.replace(start, 'M0,')
                let text_3 = text_2.replace(last, 'L300,')
                temp1[0].setAttribute("d", text_3)

            })


            //design y2 "목표"
            let elem0=$(".P1_DailyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 

                if(i==0){
                    
                    d3.select(this).select("line").remove()//.style("stroke", "#03C52E")
                    d3.select(this).select("text").attr("fill", "#03C52E").attr("font-weight", "bold");
                    d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 1).attr("dy", "-7").text("목표");
                }
    
    
            });
    
        
            },

        bar: {

            radius: {
                ratio: 0.3
            },

            width: {
                "물": 5,
                "총 수분 (물+음료)":5, 
                    },
            //zerobased: true,
            },
        line:{
                point:false,
                classes: [
                    "line-class-목표",
                ]
        },
        axis: {
                    x: {
                    type: "category",
                    categories: xDays,
                    //height:5,
                    tick:{
                        text:{
                            show:true,
                            },
                        width: 50,
                        },
                    },

                    y: {
                        show:true,

                        max:P1DG_maxY+5,

                        tick:{
                            values: P1DG_Y,
                        },
                        //padding:0,
                    },
                    
                    y2:{
                        show:true,
                        tick: {
                            values: [1000], //avgWater, 
                            format: function(data){
                                return data; 
                            },
                            
                        },
                        
                        
                        
                    }
        },

        legend:{
            show: false,
        },

        tooltip:{
            show: false,
        },

        grid:{
            y:{
                show:false,
                lines:P1DG_grid
            },
            lines:{front: false}
        },
        svg:{classname:"P1_DG"},
        bindto: "#P1_DailyGraph",
    });


    //move 평균-line backwards
    setTimeout(function(){
        let $temp=$(".P1_DailyGraph").find(".bb-chart-lines")
        $temp.prependTo($temp.parent())
    })

    //fill weekend with red 
    setTimeout(function(){
        let elem0=$(".P1_DailyGraph").find(".bb-axis-x").find("tspan").each(function(i){
                if(dates[i]==0||dates[i]==6){
                   d3.select(this).style("fill","red");
                }
        })
    })

        
    //Y2 Think Domain Design --------------------------------------------

    let elem0_P1DG=$(".P1_DailyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
        if(i==0){ //change opacity of Y2

            d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
        }
    })

        
                
    //-----------------------------------solution of hidden label, grid----------------------------------------
     
     setTimeout(function(){

            
        let temp=$(".P1_DailyGraphDiv").find(".bb-main")
        let $elem2=$(".P1_DailyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

    })


     setTimeout(function(){

                        //Legend
                d3.select(".P1_DG")
                .append("rect")
                .attr('x', 200)
                .attr('y',5)
                .attr('width','10')
                .attr('height','10')
                .attr("fill","#56A4FF")

                d3.select(".P1_DG")
                .append("text")
                .attr('x', 215)
                .attr('y',14)
                .text("물")
                .style('font-size', '100%')

                d3.select(".P1_DG")
                .append("rect")
                .attr('x', 240)
                .attr('y',5)
                .attr('width','10')
                .attr('height','10')
                .attr("fill","#DEDEDE")

                d3.select(".P1_DG")
                .append("text")
                .attr('x', 255)
                .attr('y',14)
                .text("총 수분 (물+음료)")
                .style('font-size', '100%')
                

                    //labels
                d3.select(".P1_DG")
                .append("text")
                .attr('x', 10)
                .attr('y',20)
                .text("ml")
                .style('font-size', '100%')

      })







 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------//

    let goal_water2=["목표", 1000, 1000, 1000, 1000]

    var P1_WeeklyGraph = bb.generate({
        size:{
            height: height_P1,
            width: width_P1,

        },
        padding: {
            top: 20,
            right: 30,
            left: 30,
            bottom: 0,
        },

            data: {
                    columns: 
                        [
                            goal_water2,
                            weeklyWaterIntake,
                            weeklyDrinkIntake,
                    ],
                    types: {
                        "물" : "bar",
                        "총 수분 (물+음료)" : "bar",
                        "목표":"line",
                    
                    }
                        ,
                    colors:{
                            "물": "#56A4FF",
                            "총 수분 (물+음료)": "#C4C4C4",
                            "목표":"#03C52E",
                        },  
                   labels:{format:function(d,i, j){ //d=value i=dataId j=dataIndex
                    if(i=="물" || i=="총 수분 (물+음료)"){
                        return Number(d).toFixed(1); //show only minimum and miximum value of water intake. 
                    }
                },}
                },

            onrendered: function() {

                
                    console.log(document.getElementById("P1_weeklyGraph"));

                    //increase stroke line's length
                    setTimeout(function(){
                        let temp1=document.getElementById("P1_weeklyGraph").getElementsByClassName("bb-line-목표") //.find(".bb-line-평균")
                        let text_1=temp1[0].getAttribute("d")
                        let text_2 = text_1.replace('M36', 'M0')
                        let text_3 = text_2.replace('L249', 'L300')
                        temp1[0].setAttribute("d", text_3)


                    })


                    //design y2 "목표"
                    let elem1=$(".P1_weeklyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 

                        if(i==0){
                            
                            d3.select(this).select("line").remove()//.style("stroke", "#03C52E")
                            d3.select(this).select("text").attr("fill", "#03C52E").attr("font-weight", "bold");
                            d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 1).attr("dy", "-7").text("목표");
                        }
    
    
            });

                },
            axis: {
                        x: {
                        type: "category",
                        categories: weeks,
                        tick:{
                            text:{
                                show:true,
                                },
                            width: 20,
                            },
                        },

                        y: {
                            
                            show:true,
                            max:P1WG_maxY+5,
                            tick:{
                                values:P1WG_Y
                            },
                            //padding:0,
                        
                        },
                        y2:{
                            show:true,
                            tick: {
                                show: false,
                                values: [1000], //avgWater, 
                                format: function(data){
                                    return data; 
                                },
                                
                            },  
                            
                        }
            },

            line:{
                point:false,
                classes: [
                    "line-class-목표",
                ]
            },

            bar: {

                radius: {
                    ratio: 0.3
                },
    
                width: {
                    "물": 26,
                    "총 수분 (물+음료)":26, 
                        },
                //zerobased: true,
                },

            legend:{
                show: false,
            },

            grid:{
                y:{
                    show:false,
                    lines:P1WG_grid
                },
                lines:{front: false}
            },
            tooltip:{
                show:false,
            },
            svg:{classname:"P1_WG"},
            bindto: "#P1_weeklyGraph",
        }); 

                
        //Y2 Think Domain Design --------------------------------------------

        let elem0_P1WG=$(".P1_weeklyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
            if(i==0){ //change opacity of Y2

                d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
            }
        })
 
        setTimeout(function(){
                    //Legend
            d3.select(".P1_WG")
            .append("rect")
            .attr('x', 200)
            .attr('y',10)
            .attr('width','10')
            .attr('height','10')
            .attr("fill","#56A4FF")
    
            d3.select(".P1_WG")
            .append("text")
            .attr('x', 215)
            .attr('y',19)
            .text("물")
            .style('font-size', '100%')
    
            d3.select(".P1_WG")
            .append("rect")
            .attr('x', 240)
            .attr('y',10)
            .attr('width','10')
            .attr('height','10')
            .attr("fill","#DEDEDE")
    
            d3.select(".P1_WG")
            .append("text")
            .attr('x', 255)
            .attr('y',19)
            .text("총 수분 (물+음료)")
            .style('font-size', '100%')

            //labels
            d3.select(".P1_WG")
            .append("text")
            .attr('x', 10)
            .attr('y',20)
            .text("ml")
            .style('font-size', '100%')


        })
   


        setTimeout(function(){

            let temp=$(".P1_weeklyGraphDiv").find(".bb-main")
            let $elem2=$(".P1_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);
    
        })




  

 //------------------------------------------------------------------------------------------------------------------------------//




 //-------------------------------------------------WATER HOURLY GRAPH-----------------------------------------------------------// 
 
        let P1HG_max;

        if(hourlyWaterMax>=250){
            if(hourlyWaterMax%100==0){
                P1HG_max = hourlyWaterMax;
            }
            else{
                P1HG_max = hourlyWaterMax+(100-hourlyWaterMax%100)
            }
        }
        else{
            if(hourlyWaterMax%50==0){
                P1HG_max = hourlyWaterMax;
            }
            else{
                P1HG_max=hourlyWaterMax+(50-hourlyWaterMax%50)
            }
        }

        let P1HG_Ytick=[];
        let P1HG_grid=[];
        let P1HG_margin;
        for(let i=0; i<parsedHours_water.length; i++){
            P1HG_grid.push({"value":i});
        }
        
        if(hourlyWaterMax>=250){
            for(let i=0; i<=P1HG_max/100; i++){
                P1HG_Ytick.push(i*100)
            }
            P1HG_margin = 15;
        }
        else{
            for(let i=0; i<=P1HG_max/50; i++){
                P1HG_Ytick.push(i*50)
            }
            P1HG_margin = 10;
        }

        //console.log(P1HG_max, P1HG_Ytick)


    var P1_TimezoneGraph = bb.generate({
    size:{
        width:165,
        height:360

    },
    padding:{
        top:30,
        right:30,
        left:50,
        bottom:0,
        
    },
    data:{
        columns:[
            //["cheating", 50, 100, 150], 
            hourlyWaterIntake 
        ],
        type: "bar", //"bubble",
        colors:{
            "물":"#56A4FF",
            //"cheating":"rgb(247, 247, 247)"

        },
    
    },
    bar: {

        radius: {
            ratio: 0.3
        },

        width: {
            "물": 8,
                },
        //zerobased: true,
        },

    onrendered: function() {
      
        console.log(document.getElementById("P1_TimezoneGraph"));


    },
    

    axis:{
        rotated:true,
            x: {
                //padding:0,
                type: "category",
                categories: parsedHours_water,
                tick:{
                    show:false,
                    //rotate: 60,

            
                }
                
                
            },
            y: {
                show:true,
                //min:0,
                max: P1HG_max+P1HG_margin,
                tick: {
                    values: P1HG_Ytick,
                    //rotate: 7,
                    text: {
                        position: {
                          //x: -11,
                          //y: 3
                        }
                      }
                  },
            },



    },

    grid:{
        x: {
            show: false,
            lines:P1HG_grid
            },
        //lines:{front: false}

        y:{
            show: true
            }
        }

    ,


    legend:{
        show:false,
    },

    tooltip:{
        show:false
    },


    svg: {
        classname: 'P1_TG_SVG'
    },


    bindto:"#P1_TimezoneGraph"
})
    $(".P1_TimezoneGraph").find(".bb-ygrids").attr("opacity", "0.5")

    setTimeout(function(){

                //Legend
        d3.select(".P1_TG_SVG")
        .append("rect")
        .attr('x', 123)
        .attr('y',14)
        .attr('width','10')
        .attr('height','10')
        .attr("fill","#56A4FF")

        d3.select(".P1_TG_SVG")
        .append("text")
        .attr('x', 138)
        .attr('y',23)
        .text("물")
        .style('font-size', '100%')

        d3.select(".P1_TG_SVG")
        .append("text")
        .attr('x', 143)
        .attr('y',345)
        .text("ml")
        .style('font-size', '9px')

   
        }, )



        
//------------------------------------------------------------------------------------------------------------------------------//

//P2 Graphs
        //for drawing max Y value, grid lines
        let P2DG_maxY;

        if(dailyMaxPee>=30){
            if(dailyMaxPee%10==0){
                P2DG_maxY = dailyMaxPee;
            }
            else{
                P2DG_maxY = dailyMaxPee+(10-dailyMaxPee%10)
            }
        }
        else{
            if(dailyMaxPee%5==0){
                P2DG_maxY = dailyMaxPee;
            }
            else{
                P2DG_maxY = dailyMaxPee+(5-dailyMaxPee%5)
            }
        }
        if(20>=P2DG_maxY){P2DG_maxY=20;}


        let P2DG_grid=[];
        let P2DG_Y=[];

        if(P2DG_maxY<30){
            for(let i=0; i<=(P2DG_maxY/5); i++){
                P2DG_grid.push({"value":i*5})
                P2DG_Y.push(i*5)
            }
        }
        else{
            for(let i=0; i<=(P2DG_maxY/10); i++){
                P2DG_grid.push({"value":i*10})
                P2DG_Y.push(i*10)
            }
        }

        //console.log(P2DG_maxY)

        let goal_pee1=[];
        let goal_pee2=[];
        if(range == 0){
            for(let i=startDay; i<14; i++){
                goal_pee1.push(4)
            }
            for(let i=startDay; i<14; i++){
                goal_pee2.push(7)
            }
        }
        else{
            for(let i=0; i<14; i++){
                goal_pee1.push(4)
            }
            for(let i=0; i<14; i++){
                goal_pee2.push(7)
            }
        }
console.log(goal_pee1, goal_pee2)

        goal_pee1.unshift("목표1");
        goal_pee2.unshift("목표2");

        let goal_rect={};




        //for drawing max Y value, grid lines
        let P2WG_maxY;

        if(weeklyMaxPee>=30){
            if(weeklyMaxPee%10==0){
                P2WG_maxY = weeklyMaxPee;
            }
            else{
                P2WG_maxY = weeklyMaxPee+(10-weeklyMaxPee%10)
            }
        }
        else{
            if(weeklyMaxPee%5==0){
                P2WG_maxY = weeklyMaxPee;
            }
            else{
                P2WG_maxY = weeklyMaxPee+(5-weeklyMaxPee%5)
            }
        }
        if(20>=P2WG_maxY){P2WG_maxY=20;}


        let P2WG_grid=[];
        let P2WG_Y=[];

        if(P2WG_maxY<30){
            for(let i=0; i<=(P2WG_maxY/5); i++){
                P2WG_grid.push({"value":i*5})
                P2WG_Y.push(i*5)
            }
        }
        else{
            for(let i=0; i<=(P2WG_maxY/10); i++){
                P2WG_grid.push({"value":i*10})
                P2WG_Y.push(i*10)
            }
        }





        //adjusting the number of two graphs' grid lines
        if(P2DG_maxY>=P2WG_maxY)
        {
            P2WG_maxY=P2DG_maxY;
            P2WG_grid=P2DG_grid;
            P2WG_Y=P2DG_Y;
        }
        else if(P2DG_maxY<P2WG_maxY){
            P2DG_maxY=P2WG_maxY;
            P2DG_grid=P2WG_grid;
            P2DG_Y=P2WG_Y;
        }
        else{
            console.log("ERROR")
        }


console.log(goal_pee1, goal_pee2)
    let P2_dailyGraph=bb.generate({

    size:{
        width: width_P2,
        height: height_P2,
    },
    padding:{
        top: 20,
        right: 30,
        left: 30,
        bottom: 0,
    },
    data: {
      columns: [
      dailyPeeCount,
      goal_pee1,
      goal_pee2,
      //avgPee,
      ],
      type: "line", // for ESM specify as: line()
      colors:{
          "배뇨 횟수":"#F2C94C",
          "목표1":"#03C52E",
          "목표2":"#03C52E",
          //"평균":"#F2C94C",
      },
      labels: {
        format: function(v, id, i, j) {
          
            //console.log(v, id, i, j)
            if(id=="배뇨 횟수"){
                if(v==dailyMinPee){return v};
                if(v==dailyMaxPee){return v};
               
            }
        },
    }
    
    },



    onrendered: function(){

        console.log(document.getElementById("P2_DailyGraph"));
    },

    onresize: function(){
    },
  

    axis:{
        x:{
            type: "category",
            categories: xDays,
            tick:{
                text:{
                    show:true,
                    },
                width: 50,
                },
        },
        y: {
            show:true,
            tick:{
                values: P2DG_Y
                
            },
            max:P2DG_maxY+10,
            min:0,
            //zerobased:true,
            padding:0

        },
    },
    legend:{
        show:false
    },
    grid:{
        y: {
            //show: true,
            lines:P2DG_grid
              },
        lines:{front: false}
    },
    tooltip:{
        show: false,

    },
    
    svg:{classname:"P2_DG"},
    bindto: "#P2_DailyGraph"
  });


    //fill weekend with red 
    setTimeout(function(){
            let elem0=$(".P2_DailyGraph").find(".bb-axis-x").find("tspan").each(function(i){
    
                    if(dates[i]==0||dates[i]==6){
                    d3.select(this).style("fill","red");
                    }

            })
            
    })  


  //make grid line more visible
  setTimeout(function(){
    let temp=$(".P2_DailyGraphDiv").find(".bb-main")
    let $elem2=$(".P2_DailyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

  })


  //make circles smaller 
  setTimeout(function(){

    $(".P2_DailyGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){
        d3.select(this).attr("r", 1)
        //console.log(this.getAttribute("r"))
    })
  })

  setTimeout(function(){
    //-----------------------------------Drawing "goal rectangle"------------------------------------------------ 
        let temp_height=0;
        let elem4=$(".P2_DailyGraph").find(".bb-line-목표1").each(function(i){
            //console.log(this);
            let path=$(this).attr("d");
            let parsedPath=path.split(/M|,|L/);
            parsedPath=parsedPath.splice(1)
            temp_height=parsedPath[1];
        })

        let elem5=$(".P2_DailyGraph").find(".bb-line-목표2").each(function(i){
            //console.log(this);
            let path=$(this).attr("d");
            let parsedPath=path.split(/M|,|L/);
            parsedPath=parsedPath.splice(1)
            //console.log(parsedPath);
            goal_rect["시작 좌표"]={"x":parsedPath[0]-10, "y":parsedPath[1]}
            goal_rect["가로"]={"가로":parsedPath[parsedPath.length-2]-parsedPath[0]+50}
            goal_rect["높이"]={"높이":temp_height-parsedPath[1]}
            //console.log(goal_rect);

        })



        let elem6=$(".P2_DailyGraph").find(".bb-chart-lines").each(function(i){
            //console.log(this);
            
            let rect=d3.select(this).insert("svg",":first-child")//.append("svg").attr("class","사각형")
            console.log(goal_rect)
            rect.append("rect").attr("x", goal_rect["시작 좌표"]["x"]-50).attr("y", goal_rect["시작 좌표"]["y"])
            .attr("height", goal_rect["높이"]["높이"])
            .attr("width", goal_rect["가로"]["가로"]+50)
            .attr("fill","#03C52E")
            .style("opacity", "0.25")
            

                })
    })
//Goal, Average Path Design
setTimeout(function(){
    
    let elem1=$(".P2_DailyGraph").find(".bb-circles-목표1").each(function(i){ 
        $(this).remove();
    })

    
    let elem3=$(".P2_DailyGraph").find(".bb-circles-목표2").each(function(i){
        $(this).remove();
    })


})




 
  //y2 axis design
  setTimeout(function(){
      
    let elem3=$(".P2_DailyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
        if(i==0){ //change opacity of Y2
   
            d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
        }
        else{
            //d3.select(this).style('stroke-opacity', 0.5);
        }
    })
  })




 /* 
//Goal, Average Path Design
    setTimeout(function(){
            
            let elem1=$(".P2_DailyGraph").find(".bb-circles-목표1").each(function(i){ 
                $(this).remove();
            })
        
            
            let elem3=$(".P2_DailyGraph").find(".bb-circles-목표2").each(function(i){
                $(this).remove();
            })


    })
*/
    //legend

    setTimeout(function(){

        const svg=d3.select(".P2_DG")

        //d3.select(".P1_WG")
        svg.append("circle")
        .attr('cx', 174)
        .attr('cy',15)
        .attr("r", 4)
        .attr("fill","#F2C94C")

        //d3.select(".P1_WG")
        svg.append("line")
        .attr('x1', 165)
        .attr('y1',15)
        .attr('x2', 183)
        .attr('y2', 15)
        .style("stroke-width", 3)
        .style("stroke", "#F2C94C");   

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 187)
        .attr('y',20)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        //d3.select(".P1_WG")
        svg.append("rect")
        .attr('x', 240)
        .attr('y',12)
        .attr('width','8')
        .attr('height','8')
        .attr("fill","#03C52E")
        .style("opacity", "0.3")
    

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 250)
        .attr('y',20)
        .text("배뇨 정상범위 4-7회")
        .style('font-size', '100%')


        //labels
        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 13)
        .attr('y',20)
        .text("회")
        .style('font-size', '9px')
        //.style('font-weight','bold')

    })


    let goal_pee1_2 = ["목표1", 4, 4, 4, 4]
    let goal_pee2_2 = ["목표2", 7, 7, 7, 7]

    let P2_WeeklyGraph=bb.generate({
        size:{
            width:width_P2,
            height:height_P2,
        },
        padding:{
            top: 20,
            right: 30,
            bottom: 0,
            left: 30

        },
        data:{
            columns:[
                weeklyPeeCount,
                goal_pee1_2,
                goal_pee2_2,
                //twoWeeksPeeAvg
            ],
            types: "line",
            labels:{format:function(d,i, j){ //d=value i=dataId j=dataIndex
                if(i=="배뇨 횟수"){
                    return Number(d).toFixed(1); //show only minimum and miximum value of water intake. 
                }
            }
        },
            colors:{
                "배뇨 횟수": "#EBC747",
                "목표1":"#03C52E",
                "목표2":"#03C52E",
                //"2주평균" : "#EBC747"

            },
        },
        line:{
            front:false,
            zerobased: true,
        },

        onrendered:function(){
            console.log(document.getElementById("P2_weeklyGraph"));
            
        },

        axis:{
            x:{
                type: "category",
                categories:weeks,
                tick:{
                    text:{
                        show:true,
                        },
                    width: 50,
                    },
            },

            y: {
                show:true,
                tick:{
                    values: P2WG_Y,
                    //tick:5
                },
                max:P2WG_maxY+10,
                //padding:0,
            },
        },
        legend:{
            show:false
        },
        grid:{
            y: {
                //show: true,
                lines:P2WG_grid
                },
            lines:{front: false}
        },
        svg:{classname:"P2_WG"},
        bindto: "#P2_weeklyGraph"
        
    })


    setTimeout(function(){
        //-----------------------------------Drawing "goal rectangle"------------------------------------------------ 
    let temp_height=0;
    let elem4=$(".P2_weeklyGraph").find(".bb-line-목표1").each(function(i){
        //console.log(this);
        let path=$(this).attr("d");
        let parsedPath=path.split(/M|,|L/);
        parsedPath=parsedPath.splice(1)
        temp_height=parsedPath[1];
    })

    let elem5=$(".P2_weeklyGraph").find(".bb-line-목표2").each(function(i){
        //console.log(this);
        let path=$(this).attr("d");
        let parsedPath=path.split(/M|,|L/);
        parsedPath=parsedPath.splice(1)
        //console.log(parsedPath);
        goal_rect["시작 좌표"]={"x":parsedPath[0]-10, "y":parsedPath[1]}
        goal_rect["가로"]={"가로":parsedPath[parsedPath.length-2]-parsedPath[0]+50}
        goal_rect["높이"]={"높이":temp_height-parsedPath[1]}
        //console.log(goal_rect);

    })

  

    let elem6=$(".P2_weeklyGraph").find(".bb-chart-lines").each(function(i){
        //console.log(this);
        
        let rect=d3.select(this).insert("svg",":first-child")//.append("svg").attr("class","사각형")
        rect.append("rect").attr("x", goal_rect["시작 좌표"]["x"]-50).attr("y", goal_rect["시작 좌표"]["y"])
        .attr("height", goal_rect["높이"]["높이"])
        .attr("width", goal_rect["가로"]["가로"]+50)
        .attr("fill","#03C52E")
        .style("opacity", "0.25")
        

            })
    })
    //Goal, Average Path Design
    setTimeout(function(){
        
        let elem1=$(".P2_weeklyGraph").find(".bb-circles-목표1").each(function(i){ 
            $(this).remove();
        })

        
        let elem3=$(".P2_weeklyGraph").find(".bb-circles-목표2").each(function(i){
            $(this).remove();
        })


    })

    
      //LEGEND
      setTimeout(function(){

        const svg=d3.select(".P2_WG")
        svg.append("circle")
        .attr('cx', 174)
        .attr('cy',20)
        .attr("r", 4)
        .attr("fill","#F2C94C")

        //d3.select(".P1_WG")
        svg.append("line")
        .attr('x1', 165)
        .attr('y1',20)
        .attr('x2', 183)
        .attr('y2', 20)
        .style("stroke-width", 3)
        .style("stroke", "#F2C94C");   

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 187)
        .attr('y',25)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        //d3.select(".P1_WG")
        svg.append("rect")
        .attr('x', 240)
        .attr('y',17)
        .attr('width','8')
        .attr('height','8')
        .attr("fill","#03C52E")
        .style("opacity", "0.3")
    

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 250)
        .attr('y',25)
        .text("배뇨 정상범위 4-7회")
        .style('font-size', '100%')


        //labels
        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 13)
        .attr('y',30)
        .text("회")
        .style('font-size', '9px')
        //.style('font-weight','bold')

    })

    



    setTimeout(function(){

            
        let temp=$(".P2_weeklyGraphDiv").find(".bb-main")
        let $elem2=$(".P2_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);



        //circle size modify
        $(".P2_weeklyGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })

    })



        let P2HG_grid=[];
        for(let i=0; i<parsedHours_Pee.length; i++){
            P2HG_grid.push({"value":i});
        }
        //console.log(P2HG_grid)

        let P2HG_Ytick=[];
        let P2HG_Ygrid=[];
        let P2HG_maxY;
        let P2HG_margin;

        if(hourlyPeeMax>3){

            if(hourlyPeeMax%1==0){
                P2HG_maxY = hourlyPeeMax;
            }
            else{
                P2HG_maxY = hourlyPeeMax+(1-(hourlyPeeMax%1))
                //console.log(P2HG_maxY)
            }

            for(let i=0; i<=P2HG_maxY/1; i++){
                P2HG_Ytick.push(i)
                P2HG_Ygrid.push({value:i, text:""})
            }
            P2HG_margin = 1;
        }
        else{
            if(hourlyPeeMax%0.5==0){
                P2HG_maxY = hourlyPeeMax;
            }
            else{
                P2HG_maxY = hourlyPeeMax+(0.5-(hourlyPeeMax%0.5))
            }

            for(let i=0; i<=P2HG_maxY/0.5; i++){
                P2HG_Ytick.push(i*0.5)
                P2HG_Ygrid.push({value:i*0.5, text:""})
            }
            P2HG_margin = 0.5;

        }
        //console.log(P2HG_Ytick, P2HG_Ygrid, hourlyPeeMax)

    
    var P2_TimezoneGraph = bb.generate({
        size:{
            width:165,
            height:363

        },
        padding:{
            top: 20,
            right: 30,
            left: 50,
            bottom: 0,
        
        },
        data:{
            columns:[
                //["cheating", 0.5, 1, 1.5], 
                //testPee3,
                hourlyPeeCount
            ],
            type: "bar",
            colors:{
                "배뇨 횟수":"#FFDB5B",
                //"cheating":"rgb(247, 247, 247)"

            },
        
        },
        bar: {
            radius: {
                ratio: 0.3
            },
    
            width: {
                "배뇨 횟수": 8,
                    },
            //zerobased: true,
        },
        

        onrendered: function() {
   
            console.log(document.getElementById("P2_TimezoneGraph"));

        },
        
        /*onresize:function(){
            //move bars upside
            setTimeout(function(){
                let regStartY = new RegExp(/\,\d+\.*\d*\w/)
                let regWidth = new RegExp(/H\d+\.*\d*\b/)
                let regHeight = new RegExp(/V\d+\.*\d*\b/)
                let height;
                $(".P2_TimezoneGraph").find(".bb-bars-배뇨-횟수").find("path").each(function(i){
                    let path = this.getAttribute("d")
                    let MY = path.match(regStartY)[0]
                    MY = Number(MY.substr(1, MY.length-2)) // MY: 수직선 Y 값의 start 
                    let VY = Number(path.match(regHeight)[0].substr(1)) //VY: 수직선 Y 값의 end
                    let H = Number(path.match(regWidth)[0].substr(1)) //H: 수평선 = 데이터 값 

                    if(H!=0){ //Data가 0이 아닐 때, 즉 Bar가 있을 경우 
                        height=(VY-MY)/2;
                    }
                })
                $(".P2_TimezoneGraph").find(".bb-bars-배뇨-횟수").find("path").each(function(i){
                    let path = this.getAttribute("d");
                    let MY = path.match(regStartY)[0]
                    let VY = path.match(regHeight)[0]

                    let modifiedMY = Number(MY.substr(1, MY.length-2)) // MY: 수직선 Y 값의 start 
                    let modifiedVY = Number(VY.substr(1)) //VY: 수직선 Y 값의 end
                    modifiedMY = ","+(modifiedMY-height)+"H";
                    modifiedVY = "V"+(modifiedVY-height);

                    let path1 = path.replace(MY, modifiedMY)
                    let path2 = path1.replace(VY, modifiedVY)

                    this.setAttribute("d", path2)


                })

            })

        },*/


        axis:{
            rotated:true,
                x: {
                    //padding:0,
                    type: "category",
                    categories: parsedHours_Pee,
                    tick:{
                        show:false
                
                    }
                    
                    
                },
                y: {
                    //show:false,
                    min:0,
                    tick:{
                        values:P2HG_Ytick
                        

                    },
                    max: hourlyPeeMax+P2HG_margin,
                    padding:0
                },

        },

        grid:{
            x: {
                show: false,
                lines:P2HG_grid,
                //lines:{front: false}
            },
            y:{
                show:true,
                //lines:P2HG_Ygrid,
            },
            lines:{
                front:false
            }
        }
        ,


        legend:{
            show:false,
        },

        tooltip:{
            show:false,
        },


        svg: {
            classname: 'P2_TG'
        },


        bindto:"#P2_TimezoneGraph"
    })

    
    //move bars upside
    /*setTimeout(function(){
        let regStartY = new RegExp(/\,\d+\.*\d*\w/)
        let regWidth = new RegExp(/H\d+\.*\d*\b/)
        let regHeight = new RegExp(/V\d+\.*\d*\b/)
        let height;
        $(".P2_TimezoneGraph").find(".bb-bars-배뇨-횟수").find("path").each(function(i){
            let path = this.getAttribute("d")
            let MY = path.match(regStartY)[0]
            MY = Number(MY.substr(1, MY.length-2)) // MY: 수직선 Y 값의 start 
            let VY = Number(path.match(regHeight)[0].substr(1)) //VY: 수직선 Y 값의 end
            let H = Number(path.match(regWidth)[0].substr(1)) //H: 수평선 = 데이터 값 

            if(H!=0){ //Data가 0이 아닐 때, 즉 Bar가 있을 경우 
                height=(VY-MY)/2;
            }
        })
        $(".P2_TimezoneGraph").find(".bb-bars-배뇨-횟수").find("path").each(function(i){
            let path = this.getAttribute("d");
            let MY = path.match(regStartY)[0]
            let VY = path.match(regHeight)[0]

            let modifiedMY = Number(MY.substr(1, MY.length-2)) // MY: 수직선 Y 값의 start 
            let modifiedVY = Number(VY.substr(1)) //VY: 수직선 Y 값의 end
            modifiedMY = ","+(modifiedMY-height)+"H";
            modifiedVY = "V"+(modifiedVY-height);

            let path1 = path.replace(MY, modifiedMY)
            let path2 = path1.replace(VY, modifiedVY)

            this.setAttribute("d", path2)


        })

    })*/
    setTimeout(function(){
        d3.select(".P2_TG")
        .append("rect")
        .attr('x', 100)
        .attr('y',10)
        .attr('width','10')
        .attr('height','10')
        .attr("fill","#FFDB5B")

        d3.select(".P2_TG")
        .append("text")
        .attr('x', 115)
        .attr('y',20)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        d3.select(".P2_TG")
        .append("text")
        .attr('x', 140)
        .attr('y',348)
        .text("회")
        .style('font-size', '9px')
    })

    $(".P2_TimezoneGraph").find(".bb-ygrids").attr("opacity", "0.5")


//P3 graphs 
        
        let P3DG_maxY=dailyMaxPoop;
        if(P3DG_maxY<=3){P3DG_maxY=3}
        
        //console.log(P3DG_maxY)
        let P3DG_grid=[];
        for(let i=0; i<=P3DG_maxY/1; i++){
                P3DG_grid.push({"value":i})
        }



 
        //console.log(P3DG_grid)



    var P3_DailyGraph = bb.generate({
        size:{
            width: width_P3,
            height: height_P3
        },
        padding:{
            top:30,
            right: 30, 
            bottom:0,
        },
        data: {
            columns: [
            dailyPoopCount,
            ],
            type: "scatter", // for ESM specify as: bar()
            colors:{
                "대변":"#C4C4C4"
            }
        },
        
 
        
        onrendered: function() {

                
            console.log(document.getElementById("P3_DailyGraph"));

        },
        onresized: function(){
            //move y labels to middle 
            let grid_height0=0;
            let grid_height1=0;

            let elem0=$(".P3_DailyGraph").find(".bb-ygrid-lines").find("line").each(function(i){ //circle centering
                if(i==0){grid_height1=$(this).attr("y2")}
                else if(i==1){
                    grid_height0=$(this).attr("y2")
                }
                else{
                }
            })

            let gridHeight=grid_height1-grid_height0;
            $(".P3_DailyGraph").find(".bb-axis-y").find("text").each(function(i){

                    d3.select(this).attr("y", gridHeight/2)

            })

        },
        axis:{
            x:{
                type: "category",
                categories: xDays,
                tick:{
                    text:{
                        show:true,
                        },
                    width: 50,
                    },
            },
            y: {
                show:true,
                tick:{
                    stepSize: 1,
                },
                max:P3DG_maxY,
                padding:0,
            }  ,
        },
        grid:{
            y:{
                //show:true,
                lines:P3DG_grid,
            },
            lines:{
                front:false
            }

        },
        legend:{
            show:false
        },
        svg: {
            classname: 'P3_DG_SVG'
        },
        bindto: "#P3_DailyGraph"
        });     


       //fill weekend with red 
       setTimeout(function(){
        let elem0=$(".P3_DailyGraph").find(".bb-axis-x").find("tspan").each(function(i){

                if(dates[i]==0||dates[i]==6){
                d3.select(this).style("fill","red");
                }

            })
        })  
        
        //make grid lines more visible 
       setTimeout(function(){

            
            let temp=$(".P3_DailyGraphDiv").find(".bb-main")
            let $elem2=$(".P3_DailyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);
    
        })


        setTimeout(function(){
            
            let x_loc=[]

            let grid_height0=0;
            let grid_height1=0;
            let size=0;
            //let y_start=0
            let y_loc=[]

            let elem0=$(".P3_DailyGraph").find(".bb-ygrid-lines").find("line").each(function(i){ //circle centering
                if(i==0){grid_height1=$(this).attr("y2")}
                else if(i==1){
                    grid_height0=$(this).attr("y2")
                    y_loc.push(Number($(this).attr("y2"))+3)
                }
                else{
                    y_loc.push(Number($(this).attr("y2")))
                }
                //console.log(grid_height1, grid_height0)
            })
            size=(grid_height1-grid_height0)*0.75

            
            let elem1=$(".P3_DailyGraph").find(".bb-circles-대변").find("circle").each(function(i){ //circle centering
                //d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
                x_loc.push($(this).attr("cx")-10)
                $(this).remove()
                //console.log(this);
            })
            //console.log("P3DG X, Y loc", x_loc, y_loc)

            const mainChart=d3.select(".P3_DG_SVG").select(".bb-chart")

            for(let i=0; i<dailyPoopArray.length; i++){
 
                for(let j=0; j<dailyPoopArray[i].length; j++){

                    let temp=dailyPoopArray[i][j]
                    if(temp==0 || temp == 8){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/unknown_poop.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y_loc[j])//y)
                        

                    }
                    else if(temp>0 && temp<3){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/hard.png")
                        .attr('width', size*1.5)
                        .attr('height', size*1.5)
                        .attr("x", x_loc[i]-2)
                        .attr("y", y_loc[j]*0.95)//y)
                    }
                    else if(temp==3 || temp==4){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/normal.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y_loc[j])

                    }
                    else if(temp>4 && temp<=7){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/liquid.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y_loc[j]+2)//y)

                    }
                    else{console.log("(POOP) TYPE INPUT ERROR!!!!!")}
                }
            }

            let gridHeight=grid_height1-grid_height0;
            //console.log(gridHeight, grid_height1, grid_height0);
            let Ytext_P3DG=$(".P3_DailyGraph").find(".bb-axis-y").find("text").each(function(i){
                if(i==0){this.remove()}
                else if(i==1){this.remove()}
                else{
                    d3.select(this).attr("y", gridHeight/2)

                }

            })
        

        })

              
        setTimeout(function(){

            const svg=d3.select(".P3_DG_SVG").append("g").attr("class", "legend_P3DG")

            svg.append('image')
            .attr('xlink:href', "../IMG/poo/normal.png")
            .attr('width', 13)
            .attr('height', 13)
            .attr("x", "205")
            .attr("y", "8")
    
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 220)
            .attr('y',19)
            .text("건강한 대변")
            .style('font-size', '100%')

 

            svg.append('image')
            .attr('xlink:href', "../IMG/poo/hard.png")
            .attr('width', 18)
            .attr('height', 18)
            .attr("x", "290")
            .attr("y", "5")
    
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 310)
            .attr('y',19)
            .text("딱딱한 대변")
            .style('font-size', '100%')

            
            svg.append('image')
            .attr('xlink:href', "../IMG/poo/liquid.png")
            .attr('width', 18)
            .attr('height', 18)
            .attr("x", "380")
            .attr("y", "5")

            svg.append("text")
            .attr('x', 400)
            .attr('y',19)
            .text("묽은 대변")
            .style('font-size', '100%')

            svg.append('image')
            .attr('xlink:href', "../IMG/poo/unknown_poop.png")
            .attr('width', 13)
            .attr('height', 13)
            .attr("x", "462")
            .attr("y", "8")

            svg.append("text")
            .attr('x', 480)
            .attr('y',19)
            .text("상태 모름")
            .style('font-size', '100%')
    
            //labels
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 15)
            .attr('y',25)
            .text("회")
            .style('font-size', '9px')
            //.style('font-weight','bold')



            const normal="../JS/IMG/건강한 대변";
            svg.append('img').attr('src', normal);

    
        })

       


            
        let P3WG_maxY = weeklyMaxPoop;
        if(weeklyMaxPoop%2==0){}
        else{
            P3WG_maxY = Number(weeklyMaxPoop)+Number(2-(weeklyMaxPoop%2))

        }
        
        //if(8>P3WG_maxY){P3WG_maxY=8;}

        let P3WG_grid=[];
        let P3WG_Y=[];

        if(P3WG_maxY>20){
            for(let i=0; i<=(P3WG_maxY/10+1); i++){
                P3WG_grid.push({"value":i*10})
                P3WG_Y.push(i*10)
            }
        }
        else if(P3WG_maxY>10){
            for(let i=0; i<=(P3WG_maxY/5+1); i++){
                P3WG_grid.push({"value":i*5})
                P3WG_Y.push(i*5)
            }
        }
        else{
            for(let i=0; i<=P3WG_maxY/2; i++){
                P3WG_grid.push({"value":i*2})
                P3WG_Y.push(i*2)
            }
        }

        //console.log(P3WG_maxY, P3WG_grid, P3WG_Y)


    let P3_weeklyGraph=bb.generate({

        size:{
            height: height_P3,
            width: width_P3
        },
        padding:{
            top:30,
            right: 30, 
            bottom:0,
        },
        
        onrendered: function(){

            console.log(document.getElementById("P3_weeklyGraph"));


        },
        

        data: {
            columns: [
            weeklyHealthyPoopCount,
            weeklyPoopCount,
            ],
            type: "bar", // for ESM specify as: line()
            colors:{
                "총 배변 횟수":"#C4C4C4",
                "건강한 배변 횟수":"#8B5A3C"
            },
            labels:{
                show:true,
            }
            
        },
        bar: {

            radius: {
                ratio: 0.3
            },

            width: {
                "총 배변 횟수": 15,
                "건강한 배변 횟수":15, 
                    },
            //zerobased: true,
         },
        axis:{
            x:{
                type: "category",
                categories: weeks,
                tick:{
                    text:{
                        show:true
                    },
                    width: 50,
                    },
            },
    
            y: {
                show:true,
                tick:{
                    values:P3WG_Y
                },
                max:P3WG_maxY,
                min:0,
                padding:0,
            },
        },
        legend:{
            show:false,
        },
        grid:{
            y:{
                //show:true,
                lines:P3WG_grid,
            },
            lines:{
                front:false
            }
        

        },
        svg: {
            classname: 'P3_WG'
            },
        bindto: "#P3_weeklyGraph"


    })


    setTimeout(function(){

        let temp=$(".P3_weeklyGraphDiv").find(".bb-main")
        let $elem1=$(".P3_weeklyGraph").find(".bb-chart-texts").clone().appendTo(temp);
        let $elem2=$(".P3_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

      })

    setTimeout(function(){

                const svg=d3.select(".P3_WG")
            
                //d3.select(".P1_WG")
                svg.append("rect")
                .attr('x', 332)
                .attr('y', 6)
                .attr('width','10')
                .attr('height','10')
                .attr("fill","#8B5A3C")
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 346)
                .attr('y',15)
                .text("건강한 배변 횟수")
                .style('font-size', '100%')
            
                //d3.select(".P1_WG")
                svg.append("rect")
                .attr('x', 445)
                .attr('y', 6)
                .attr('width','10')
                .attr('height','10') 
                .attr("fill","#C4C4C4")              
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 460)
                .attr('y',15)
                .text("총 배변 횟수")
                .style('font-size', '100%')
            
                //labels
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 15)
                .attr('y',18)
                .text("회")
                .style('font-size', '9px')
                //.style('font-weight','bold')
            
              })
           
        //remove all interactive events
        $(".P1_DailyGraph").find(".bb-event-rects-single").remove()
        $(".P1_weeklyGraph").find(".bb-event-rects-single").remove()
        $(".P1_TimezoneGraph").find(".bb-event-rects-multiple").remove()
        $(".P2_DailyGraph").find(".bb-event-rects-single").remove()
        $(".P2_weeklyGraph").find(".bb-event-rects-single").remove()
        $(".P2_TimezoneGraph").find(".bb-event-rects-multiple").remove()
        $(".P3_DailyGraph").find(".bb-event-rects-multiple").remove()
        $(".P3_weeklyGraph").find(".bb-event-rects-single").remove()





       
}   




















    //Arrange the water intake and pee logs by days
    function count_Daily(Data, days){

        let dailyData=new Array(14);

        for(let i=0; i<14; i++){
            dailyData[i]=0;
        }

        
        //Count by day
        for(let i=0; i<Data.length; i++){
            let temp=Data[i];
            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/').replace('/0', '/')
            if(temp_day[0]==0){temp_day = temp_day.substr(1)}

            let checkDay=false;
            //let checkHour=false;
            for(let j=0; j<days.length; j++){
                if(temp_day==days[j]){
                    dailyData[j]++;
                    checkDay=true;
                    break;
                }
            }
            if(checkDay==false){console.log("ERROR!!")}
    
        }
        //console.log(dailyData);
        return dailyData;
    


    }

    function count_Daily_Drink(Data, days){

        let dailyData=new Array(14);

        for(let i=0; i<14; i++){
            dailyData[i]=0;
        }

        
        //Count by day
        for(let i=0; i<Data.length; i++){
            let temp=Data[i];
            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/').replace('/0', '/')
            if(temp_day[0]==0){temp_day = temp_day.substr(1)}

            let checkDay=false;
            //let checkHour=false;
            for(let j=0; j<days.length; j++){
                if(temp_day==days[j]){
                    dailyData[j]+=temp.volume;
                    checkDay=true;
                    break;
                }
            }
            if(checkDay==false){console.log("ERROR!!")}
    
        }
        //console.log(dailyData);
        return dailyData;
    


    }

    function count_Hourly(Data, hours){

        let hourlyData=new Array(24);
        for(let i=0; i<24; i++){
            hourlyData[i]=0;
        }
        
        for(let i=0; i<Data.length; i++){

            let temp=Data[i];
            let temp_hour=temp.timestamp.split(" ")[1].split(":")[0];

            let checkHour=false;
            for(let j=0; j<hours.length; j++){
                if(temp_hour==hours[j]){
                    hourlyData[j]++;
                    checkHour=true;
                    break;
                }
            }
            if(checkHour==false){console.log("ERROR!!");}

        }

        return hourlyData;


    }
   //Arrange the water intake and pee logs by days
   function count_daily_Poop(Data, days){

    let dailyData=[]
    for(let i=0; i<days.length; i++){
        dailyData[i]=[]
    }

    
    //Count by day
    for(let i=0; i<Data.length; i++){
        if(Data[i].type>8 || Data[i].type<0){console.log("WRONG POO TYPE INPUT")}
        else{
            let temp=Data[i];
            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/').replace('/0', '/')
            if(temp_day[0]==0){temp_day = temp_day.substr(1)}

            let checkDay=false;
            //let checkHour=false;
            for(let j=0; j<days.length; j++){
                if(temp_day==days[j]){
                    dailyData[j].push(Data[i].type)
    
                    checkDay=true;
                    break;
                }
            }
            if(checkDay==false){console.log("ERROR!!")}
    }

    }
    //console.log(dailyData);
    return dailyData;


}

   
    //for drawing hourly graph, parse the data and find the start, last index of recorded data(not zero) and hour axis 
    function count_parse_hourly(UserData, count_Hourly, hours, parsedHours, range, startDay){
        //make a new array that contains only values (for drawing graph)
       let originalHourData=count_Hourly(UserData, hours);
       if(range == 0){
           originalHourData = originalHourData.slice(startDay)
       }

       let parsedHourData=[];
       for(let i=0; i<originalHourData.length; i++){

            if(range == 0){
                parsedHourData.push((originalHourData[i]/(14-startDay))); //normalization by 2 weeks
            }
            else{
                parsedHourData.push((originalHourData[i]/14)); //normalization by 2 weeks
            }

            
       }
       console.log(parsedHourData)


           //find the start and last hour of water take
       let startIdx=0;
       let lastIdx=23;
   
       for(let i=startIdx; i<lastIdx+1; i++){
           if(parsedHourData[i]!=0){startIdx=i;break;}
       }
   
       for(let i=lastIdx; i>startIdx-1; i--){
           if(parsedHourData[i]!=0){lastIdx=i; break;}
       }


       parsedHourData1=parsedHourData.slice(startIdx, lastIdx+1);
       parsedHours1=parsedHours.slice(startIdx, lastIdx+1);

       //console.log(parsedHourData, parsedHours);

       return [parsedHourData1, parsedHours1, parsedHourData];
    }

    
    function key_days(start){
        
        let day = new Date(start);
        let days=[];
 
        for(let i=0; i<14; i++){
            days.push((day.getMonth()+1+"/")+(day.getDate()+0+"")); //In data object. Month ranges from 0 to 11. [month, day, count]
            day.setDate(day.getDate()+1);

        }

        return days;
    }

    function getXDays(start, startDay){
        if(range == 0){
        let day = new Date(start);
        day.setDate(day.getDate()+startDay)
        let days=[];
        for(let i=startDay; i<14; i++){
            if(i==startDay)
            {
                days.push((day.getMonth()+1+"/")+(day.getDate()+0+""));
            } //In data object. Month ranges from 0 to 11. [month, day, count]
            else{
                let prev=new Date(day.getTime()-(24*60*60*1000))
                if(prev.getMonth()==day.getMonth()){
                    days.push((day.getDate()+0+""));

                }
                else{
                    days.push((day.getMonth()+1+"/")+(day.getDate()+0+""));
                }
            }
            day.setDate(day.getDate()+1);
        }
        return days;
        }
        else{
            let day = new Date(start);
            let days=[];
            for(let i=0; i<14; i++){
                if(i==0)
                {
                    days.push((day.getMonth()+1+"/")+(day.getDate()+0+""));
                } //In data object. Month ranges from 0 to 11. [month, day, count]
                else{
                    let prev=new Date(day.getTime()-(24*60*60*1000))
                    if(prev.getMonth()==day.getMonth()){
                        days.push((day.getDate()+0+""));
    
                    }
                    else{
                        days.push((day.getMonth()+1+"/")+(day.getDate()+0+""));
                    }
                }
                day.setDate(day.getDate()+1);
            }
            return days;
            }
    }

    function getDates(start){
        
        let day = new Date(start);
        let dates=[];
 
        for(let i=0; i<14; i++){
            dates.push(day.getDay()); //In data object. Month ranges from 0 to 11. [month, day, count]
            day.setDate(day.getDate()+1);
            
        }
        //console.log(dates)

        return dates;
    }

    function key_hours(){
        let hours=[];
        
        for(let i=0; i<24; i++){
            let temp=i;
            hours.push(temp);
        }
        return hours;

    }

    function parsing_hours(){
        let parsed_hours=[];
        for(let i=0; i<24; i++){
            let temp=i%12+"시";
            if(i==3){temp="새벽 3시";}
            else if(i==6){temp="새벽 6시";}
            else if(i==9){temp="아침 9시";}
            else if(i==12){temp="점심 12시";}
            else if(i==15){temp="낮 3시";}
            else if(i==18){temp="저녁 6시";}
            else if(i==21){temp="밤 9시";}
            else if(i==0){temp="밤 12시";}
            parsed_hours.push(temp);
        }
        return parsed_hours;
    }

    function week(start_date, idx){
        let week=new Date(start_date);
        week.setTime(start_date.getTime() + (idx*7*24*60*60*1000));
        return week;
    }




    
   
console.log(`----------------------------------------------------------`);
console.log(`Debug Text...! function is called`)
console.log(`----------------------------------------------------------`);
    //===============================================================================================================