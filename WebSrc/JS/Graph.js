let UserWaterData = []
let UserDrinkData = []
let UserPoopData = []
let UserPeeData = []

let UserTotalWaterData = []
let UserTotalDrinkData = []
let UserTotalPoopData = []
let UserTotalPeeData = []

let DataLoadComplete = (startDateStamp, rangeInt, creation, id) => {

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
    let start=startDateStamp
    let height1=142;
    let width1=350;

    let height2=270;
    let width2=195;

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


    //let week1=1;
    //let week2=2;
    




    let accumulated_Poop=0;
    let accumulated_healthyPoop=0;


    let days=key_days(start); //for daily axis and data matching 
    let weeks=["1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"]
    let hours=key_hours();
    let parsed_hours=parsing_hours(); //for hourly axis


//-------------------------------------------WATER(daily, weekly, hourly )--------------------------------------------//
   
//DAILY
        let dailyWaterCount=count_Daily(UserWaterData, days);
        let dailyWaterIntake=[]
        for(let i=0; i<dailyWaterCount.length; i++){
            dailyWaterIntake.push(dailyWaterCount[i]*100)
        }
        dailyWaterIntake.unshift(["물"]);


            //calculate the max, min, average value of water intake;
        let maxWater=dailyWaterIntake[1];
        let minWater=dailyWaterIntake[1];
        let total_water=0;

        for(let i=1; i<dailyWaterIntake.length; i++){
            temp=dailyWaterIntake[i];
            //console.log(temp, minWater)
            total_water+=temp;
            if(temp<minWater){minWater=temp;}
            if(temp>maxWater){maxWater=temp;}
        }
        let avgWater=parseInt(total_water/14);

   
    

//weekly (normalized)
    //***************추후 다른 주 데이터도 받아와야함 **********

        let weeklyWaterIntake=[0, 0, 0, 0, 0, 0, 0, 0] //8 weeks data

        for(let i=0; i<UserTotalWaterData.length; i++){
            if(UserTotalWaterData[i].id==id){
                let time=new Date(UserTotalWaterData[i].timestamp)
                if(W0<=time && time<W1){weeklyWaterIntake[0]++}
                else if(W1<=time && time<W2){weeklyWaterIntake[1]++}
                else if(W2<=time && time<W3){weeklyWaterIntake[2]++}
                else if(W3<=time && time<W4){weeklyWaterIntake[3]++}
                else if(W4<=time && time<W5){weeklyWaterIntake[4]++}
                else if(W5<=time && time<W6){weeklyWaterIntake[5]++}
                else if(W6<=time && time<W7){weeklyWaterIntake[6]++}
                else if(W7<=time && time<W8){weeklyWaterIntake[7]++}
            }
        }
        for(let i=0; i<weeklyWaterIntake.length; i++){
            weeklyWaterIntake[i]=parseInt(weeklyWaterIntake[i]*100/7)
        }
        weeklyWaterIntake.unshift("물")
        
        console.log(weeklyWaterIntake)

        /*let week1_Water=0;
        let week2_Water=0;
    
        for(let i=1; i<dailyWaterIntake.length; i++){
            if(i<8){
                week1_Water+=dailyWaterIntake[i];
            }
            else{
                week2_Water+=dailyWaterIntake[i];
            }
        }

        weeklyWaterIntake[week1]=parseInt(week1_Water/7);
        weeklyWaterIntake[week2]=parseInt(week2_Water/7);
        //console.log(week1_Water, week2_Water, weeklyWaterIntake);*/






//hourly (normalized)
        let hourlyWater=count_parse_hourly(UserWaterData, count_Hourly, hours, parsed_hours);
        let hourlyWaterIntake=hourlyWater[0];
        let parsedHours_water=hourlyWater[1];

            //count * 100(ml)
        for(let i=0; i<hourlyWaterIntake.length; i++){
            hourlyWaterIntake[i]=parseInt(hourlyWaterIntake[i]*100);
        }
        hourlyWaterIntake.unshift("물");
        //console.log(hourlyWaterIntake, parsedHours_water);



                        //-------------WATER INTAKE GOAL(for drawing graph-------------------//
                        let goal_water=["목표"];
                        for(let i=0; i<14; i++){
                            goal_water.push(1000);
                            }
                        //-------------WATER INTAKE AVERAGE(for drawing graph----------------//

                        let avg_water=["평균"];
                        for(let i=0; i<14; i++){
                            avg_water.push(avgWater);
                            }


//-----------------------------------------------DRINK(only daily, weekly)-----------------------------------//

    //daily
        let dailyDrinkCount=count_Daily(UserDrinkData, days);
        let dailyDrinkIntake=[]
        //console.log(dailyDrink);
            //add water logs to drink logs for drawing a graph (daily)
        for(let i=0; i<dailyDrinkCount.length; i++){
                dailyDrinkIntake.push((dailyDrinkCount[i]+dailyWaterCount[i])*100); 
        }
        //console.log(dailyDrinkIntake)

        dailyDrinkIntake.unshift("총 수분 (물+음료)")
        let dailymaxDrink=0;
        for(let i=0; i<dailyDrinkIntake.length; i++){
            if(dailyDrinkIntake[i]>dailymaxDrink){dailymaxDrink=dailyDrinkIntake[i]
            }
        }
    


//weekly (normalized)
    //******************추후 다른 주 데이터도 받아와야함 *************************
        //let weeklyDrinkIntake=["총 수분 (물+음료)", 0, 0, 0, 0, 0, 0, 0, 0];
        let weeklyDrinkIntake=[0, 0, 0, 0, 0, 0, 0, 0];

        for(let i=0; i<UserTotalDrinkData.length; i++){
            if(UserTotalDrinkData[i].id==id){
                let time=new Date(UserTotalDrinkData[i].timestamp)
                if(W0<=time && time<W1){weeklyDrinkIntake[0]++}
                else if(W1<=time && time<W2){weeklyDrinkIntake[1]++}
                else if(W2<=time && time<W3){weeklyDrinkIntake[2]++}
                else if(W3<=time && time<W4){weeklyDrinkIntake[3]++}
                else if(W4<=time && time<W5){weeklyDrinkIntake[4]++}
                else if(W5<=time && time<W6){weeklyDrinkIntake[5]++}
                else if(W6<=time && time<W7){weeklyDrinkIntake[6]++}
                else if(W7<=time && time<W8){weeklyDrinkIntake[7]++}
            }
        }
        for(let i=0; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=parseInt(weeklyDrinkIntake[i]*100/7)
        }

        let weeklymaxDrink=0;
        for(let i=0; i<weeklyDrinkIntake.length; i++){
            if(weeklyDrinkIntake[i]>weeklymaxDrink){weeklymaxDrink=weeklyDrinkIntake[i]}
        }
        console.log(weeklymaxDrink);

        weeklyDrinkIntake.unshift("총 수분 (물+음료)")

        console.log(weeklyDrinkIntake)
        for(let i=1; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=weeklyDrinkIntake[i]+weeklyWaterIntake[i];
        }
        
        console.log(weeklyDrinkIntake)





//hourly (normalized)
        let hourlyPee=count_parse_hourly(UserPeeData, count_Hourly, hours, parsed_hours);
        let hourlyPeeCount=hourlyPee[0];
        let parsedHours_Pee=hourlyPee[1];
    
        hourlyPeeCount.unshift("배뇨 횟수");
        //console.log(hourlyPeeCount, parsedHours_Pee);
  



//-----------------------------------------------Pee(daily, weekly, hourly)-----------------------------------//
//daily

        let dailyPeeCount=count_Daily(UserPeeData, days);
        dailyPeeCount.unshift("배뇨 횟수")
        //console.log(dailyPeeCount);

        let dailyMaxPee=0;
        let total=0;
        for(let i=1; i<dailyPeeCount.length; i++){
            if(dailyMaxPee<dailyPeeCount[i]){dailyMaxPee=dailyPeeCount[i]}
            total+=dailyPeeCount[i];
        }
        let avg_Pee=(total/14).toFixed(2);
        console.log(dailyMaxPee, avg_Pee);


//weekly
        //let weeklyPeeCount=["배뇨 횟수", 0, 0, 0, 0, 0, 0, 0, 0]
        let weeklyPeeCount=[0, 0, 0, 0, 0, 0, 0, 0]

        for(let i=0; i<UserTotalPeeData.length; i++){
            if(UserTotalPeeData[i].id==id){
                let time=new Date(UserTotalPeeData[i].timestamp)
                if(W0<=time && time<W1){weeklyPeeCount[0]++}
                else if(W1<=time && time<W2){weeklyPeeCount[1]++}
                else if(W2<=time && time<W3){weeklyPeeCount[2]++}
                else if(W3<=time && time<W4){weeklyPeeCount[3]++}
                else if(W4<=time && time<W5){weeklyPeeCount[4]++}
                else if(W5<=time && time<W6){weeklyPeeCount[5]++}
                else if(W6<=time && time<W7){weeklyPeeCount[6]++}
                else if(W7<=time && time<W8){weeklyPeeCount[7]++}
            }
        }
        for(let i=0; i<weeklyPeeCount.length; i++){
            weeklyPeeCount[i]=(weeklyPeeCount[i]/7).toFixed(2);
        }
        weeklyPeeCount.unshift("배뇨 횟수")

        console.log(weeklyPeeCount)

        let weeklyMaxPee=0;
        for(let i=0; i<8; i++){
            if(weeklyPeeCount[i]>weeklyMaxPee){
                weeklyMaxPee=weeklyPeeCount[i];}
            else{}
        }




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
        console.log(dailyPoopArray, dailyPoopCount, dailyMaxPoop)

//WEEKLY
        let weeklyPoopCount=[0, 0, 0, 0, 0, 0, 0, 0] //8 weeks data
        /*for(let i=week2; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=null
        }*/

        let weeklyHealthyPoopCount=[0, 0, 0, 0, 0, 0, 0, 0]
        /*for(let i=week2; i<weeklyHealthyPoopCount.length; i++){
            weeklyHealthyPoopCount[i]=null
        }*/

        for(let i=0; i<UserTotalPoopData.length; i++){
            valid=false;
            idx=-1;
            if(UserTotalPoopData[i].id==id){
                let time=new Date(UserTotalPoopData[i].timestamp)
                if(W0<=time && time<W1){weeklyPoopCount[0]++; valid=true; idx=0;}
                else if(W1<=time && time<W2){weeklyPoopCount[1]++; valid=true; idx=1;}
                else if(W2<=time && time<W3){weeklyPoopCount[2]++; valid=true; idx=2;}
                else if(W3<=time && time<W4){weeklyPoopCount[3]++; valid=true; idx=3;}
                else if(W4<=time && time<W5){weeklyPoopCount[4]++; valid=true; idx=4;}
                else if(W5<=time && time<W6){weeklyPoopCount[5]++; valid=true; idx=5;}
                else if(W6<=time && time<W7){weeklyPoopCount[6]++; valid=true; idx=6;}
                else if(W7<=time && time<W8){weeklyPoopCount[7]++; valid=true; idx=7;}

                if(valid && (UserTotalPoopData[i].type==3||UserTotalPoopData[i].type==4)){
                    weeklyHealthyPoopCount[idx]++
                }
            }
        }

        console.log(weeklyPoopCount, weeklyHealthyPoopCount)
        for(let i=1; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=weeklyPoopCount[i-1]+weeklyPoopCount[i]
            weeklyHealthyPoopCount[i]=weeklyHealthyPoopCount[i-1]+weeklyHealthyPoopCount[i]
        }

        let lastidx=-1;
        switch(rangeInt){
            case 0: lastidx=1; break;
            case 1: lastidx=3; break;
            case 2: lastidx=5; break;
            case 3: lastidx=7; break;
        }
        for(let i=lastidx+1; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=null;
            weeklyHealthyPoopCount[i]=null;
        }
        console.log(weeklyPoopCount)
        let weeklyMaxPoop=weeklyPoopCount[lastidx];

        /*let week1_Poop=0;
        let week1_healthyPoop=0;
        let week2_Poop=0;
        let week2_healthyPoop=0;

        // [ [*count] [] *14]
        for(let i=0; i<dailyPoopCount.length; i++){
            if(i<7){
                week1_Poop+=dailyPoopCount[i]
                for(let j=0; j<dailyPoopArray[i].length; j++){
                    if(dailyPoopArray[i][j]==3||dailyPoopArray[i][j]==4)
                    {
                        week1_healthyPoop++
                    }
                }
            }
            else{
                week2_Poop+=dailyPoopCount[i]
                for(let j=0; j<dailyPoopArray[i].length; j++){
                    if(dailyPoopArray[i][j]==3||dailyPoopArray[i][j]==4)
                    {
                        week2_healthyPoop++
                    }
                }
            }
        }

        console.log(week1_Poop, week2_Poop)


        accumulated_Poop=accumulated_Poop+week1_Poop
        accumulated_healthyPoop=accumulated_healthyPoop+week1_healthyPoop
        weeklyPoopCount[week1-1]=accumulated_Poop
        weeklyHealthyPoopCount[week1-1]=accumulated_healthyPoop

        accumulated_Poop=accumulated_Poop+week2_Poop
        accumulated_healthyPoop=accumulated_healthyPoop+week2_healthyPoop
        weeklyPoopCount[week2-1]=accumulated_Poop
        weeklyHealthyPoopCount[week2-1]=accumulated_healthyPoop
        //console.log(week1_Water, week2_Water, weeklyWaterIntake);*/


        
        dailyPoopCount.unshift("대변")
        weeklyPoopCount.unshift('총 배변 횟수')
        weeklyHealthyPoopCount.unshift('건강한 배변 횟수')

        //console.log(dailyPoopArray, dailyPoopCount, weeklyPoopCount, weeklyHealthyPoopCount)




//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//
//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//

        /*testWater=['물'];
        testDrink=["총 수분 (물+음료)"];
        for(let i=0; i<14; i++){if(i%3==0){testWater.push(1500);}else if(i%2==0){testWater.push(0);}else{testWater.push(700);}}
        for(let i=0; i<14; i++){if(i%3==0){testDrink.push(1800);}else if(i%2==0){testDrink.push(100);}else{testDrink.push(700);}}
        maxDrink=1500
        maxWater=1500;
        minWater=0;*/

        let P1DG_maxY;
        if(dailymaxDrink%300==0){P1DG_maxY=dailymaxDrink}
        else{
            P1DG_maxY=dailymaxDrink+(300-(dailymaxDrink%300));
        }
        if(1200>P1DG_maxY){P1DG_maxY=1200;}

        let P1DG_grid=[];
        let P1DG_Y=[];
        for(let i=0; i<=P1DG_maxY/300; i++){
            P1DG_grid.push({"value":i*300})
            P1DG_Y.push(i*300)
        }


    var P1_DailyGraph = bb.generate({
        size: {
                height: height1,
                width: width1,
        },
        padding: {
                top: 30,
                right: 40,
                bottom: 0,
                left: 30
            },
        data: {
                
                columns: 

                    [
                        //testWater,
                        //testDrink,
                        dailyWaterIntake,
                        dailyDrinkIntake,
                        goal_water,
                        avg_water
                    ],
                axes:{
                    "물":"y",
                    "총 수분 (물+음료)":"y",
                    "avg_water":"y2"

                },
                
                types: {
                        "물": "bar",
                        "총 수분 (물+음료)": "bar",
                        "목표":"line",
                        "평균":"line",
                    }
                    ,
                colors:{
                        "물": "#56A4FF",
                        "총 수분 (물+음료)": "#DEDEDE",
                        "목표":"#03C52E",
                        "평균":"#56A4FF"
                    },  
                labels:{
                    show:true,
                    format:function(d,i, j){ //d=value i=dataId j=dataIndex
                        //console.log(d, i, j);
                        if(i=="물"){
                            //if(d>=1200){return d;} //if water intake amount is greater than 1200ml, use same bar height for all but shosw it's data label.
                            if(d==maxWater||d==minWater){return d;} //show only minimum and miximum value of water intake. 
                        }
                    },
                }
                        
            },
        onrendered: function() {

                
                console.log(document.getElementById("P1_DailyGraph"));
                let test=0; 


                /*-----------------------------------Y2 Think Domain Design --------------------------------------------*/

                let elem1=$(".P1_DailyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
                    if(i==0){ //change opacity of Y2
                        test=this;
                        d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
                    }
                    else{
                        //d3.select(this).style('stroke-opacity', 0.5);
                    }
                })


                /*-----------------------------------Water Data label Design --------------------------------------------*/
                let elem2=$(".P1_DailyGraph").find(".bb-texts-물").find("text").each(function(i){
                    d3.select(this).style("font-size", "8px")//.style("font-weight", "bold"); //modify font size

                    originalY=parseFloat($(this).attr("y"));  
                    Y=originalY//+10
                    if($(this).text()==maxWater+""){
                        d3.select(this).attr("y", Y)
                    }

                })


                /*-----------------------------------Bar Design--------------------------------------------------------- */

                let elem3=$(".P1_DailyGraph").find(".bb-bars-총-수분--물-음료-").find("path").each(function(i){
                    test=this;
                    //console.log(this);

                    let thisD=$(this).attr("d");
                    //console.log(thisD);
                    let start_M=1;
                    let start_V1 = parseInt(thisD.indexOf('V', 1)) + 1;

                    let M=thisD.slice(start_M, parseInt(thisD.indexOf('V', 1)));
                    let V1=thisD.slice(start_V1, parseInt(thisD.indexOf('V', 2)));
                    //console.log(M, V1);

                    //let start = parseInt(thisD.indexOf(thisD, 'Z', 0))
                    //console.log(start);


                })

                /*-----------------------------------X axis Design--------------------------------------------------------- */
                let elem4=$(".P1_DailyGraph").find(".bb-axis-x").find(".tick").each(function(i){
                    d3.select(this).style("font-size", "8px");

                })                


        
            },

        bar: {

            radius: {
                ratio: 0.3
            },

                width: {
                    "물": 6,
                    "총 수분 (물+음료)":4, //not being applied now. if you want to locate this aside water bar, remove 'group' part above
                        },
                zerobased: true,
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
                    categories: days,
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

                        max:P1DG_maxY,

                        tick:{
                            values: P1DG_Y,
                        },
                        //padding:0,
                    },
                    
                    y2:{
                        show:true,
                        tick: {
                            values: [avgWater, 1000],
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
            format:{
                value: function(value, ratio, id){
                    if(id=="물"||id=="총 수분 (물+음료)") 
                    {return value;}
                }
            }

        },

        grid:{
            y:{
                show:false,
                lines:P1DG_grid
            },
            //lines:{front: false}
        },
        svg:{classname:"P1_DG"},
        bindto: "#P1_DailyGraph",
    });



/*---------------------------------------------LEGEND DESIGN--------------------------------------------------------- */
 
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
                .style('font-weight','bold')

      }, 100)

     /*-----------------------------------TICK Design--------------------------------------------------------- */
     
      setTimeout(function(){

   
        let elem0=$(".P1_DailyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 
            if(i==0){  //평균 1000ml의 tick index
                test=this;
                d3.select(this).select("line").style("stroke", "#56A4FF")
                d3.select(this).select("text").attr("fill", "#56A4FF").attr("font-weight", "bold");
                d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-7").text("평균");

                if(Math.abs(avgWater-1000)<100 && avgWater<1000){
                    console.log("START")
                    d3.select(this).select("text").select("tspan").attr("dy","20")
                }

            }
            if(i==1){
                test=this;
                
                d3.select(this).select("line").style("stroke", "#03C52E")
                d3.select(this).select("text").attr("fill", "#03C52E").attr("font-weight", "bold");
                d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-7").text("목표");
                //
                //console.log(Math.abs(avgWater-1000))
                if(Math.abs(avgWater-1000)<100 && avgWater>1000){
                    console.log("START")
                    d3.select(this).select("text").select("tspan").attr("dy","20")
                }
                console.log(this)
                

            }
        }, 100);

      })
 

 //------------------------------------------------------------------------------------------------------------------------------//



 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------//

//Y axis, grid array setting
            let P1WG_maxY;
            if(weeklymaxDrink%300==0){P1WG_maxY=weeklymaxDrink;}
            else{P1WG_maxY=weeklymaxDrink+(300-(weeklymaxDrink%300));}
            if(P1WG_maxY<1200){P1WG_maxY=1200}
            console.log(P1WG_maxY)

            let P1WG_grid=[];
            let P1WG_Y=[];
            for(let i=0; i<=P1WG_maxY/300; i++){
                P1WG_grid.push({"value":i*300})
                P1WG_Y.push(i*300);
            }
            console.log(P1WG_grid);

 //console.log(P1WG_maxY)
    var P1_WeeklyGraph = bb.generate({
        size:{
            height:height1,
            width: width1,

        },
        padding: {
            top: 30,
            right: 40,
            bottom: 30,
            left: 30
        },

            data: {
                    columns: 
                        [
                        weeklyDrinkIntake,
                        weeklyWaterIntake,
                            //testDrink2
                    ],
                    type: "line"
                        ,
                    colors:{
                            "물": "#56A4FF",
                            "총 수분 (물+음료)": "#C4C4C4",
                        },  
                   labels:true,
                },
                line: {
                    connectNull: false,
                    zerobased: true
                },

            onrendered: function() {

                
                    console.log(document.getElementById("P1_weeklyGraph"));

                   // -----------------------------------Data Label position Design------------------------------------------------ */

                    let elem0=$(".P1_weeklyGraph").find(".bb-chart-texts").find("text").each(function(i){ //Label Position
                        d3.select(this).style("font-size", "7px").style("font-weight", "bold");                    


                    })



                },
            axis: {
                        x: {
                        type: "category",
                        categories: weeks,
                        height:5,
                        tick:{
                            text:{
                                show:true,
                                },
                            width: 20,
                            },
                        },

                        y: {
                            
                            show:true,
                            max:P1WG_maxY,
                            tick:{
                                values:P1WG_Y
                            },
                            //padding:0,
                        
                        },
            },

            legend:{
                show: false,
            },

            grid:{
                y:{
                    //show:false,
                    lines:P1WG_grid
                },
                lines:{front: false}
            },
            tooltip:{
                show:true
            },
            svg:{classname:"P1_WG"},
            bindto: "#P1_weeklyGraph",
        });


 

        setTimeout(function(){
                    //Legend
            d3.select(".P1_WG")
            .append("rect")
            .attr('x', 200)
            .attr('y',11)
            .attr('width','8')
            .attr('height','8')
            .attr("fill","#56A4FF")

            d3.select(".P1_WG")
            .append("line")
            .attr('x1', 195)
            .attr('y1',15)
            .attr('x2', 213)
            .attr('y2', 15)
            .style("stroke-width", 3)
            .style("stroke", "#56A4FF");   
    
            d3.select(".P1_WG")
            .append("text")
            .attr('x', 215)
            .attr('y',19)
            .text("물")
            .style('font-size', '100%')
    
            d3.select(".P1_WG")
            .append("rect")
            .attr('x', 240)
            .attr('y',11)
            .attr('width','8')
            .attr('height','8')
            .attr("fill","#DEDEDE")

            
            d3.select(".P1_WG")
            .append("line")
            .attr('x1', 235)
            .attr('y1',15)
            .attr('x2', 253)
            .attr('y2', 15)
            .style("stroke-width", 3)
            .style("stroke", "#DEDEDE");   
    
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
            .style('font-weight','bold')

            
            let elem0=$(".P1_weeklyGraph").find(".bb-texts-물").find("text").each(function(i){ //Label Position
                d3.select(this).attr("dy", "20")                  


            })
        })

  

 //------------------------------------------------------------------------------------------------------------------------------//




 //-------------------------------------------------WATER HOURLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER HOURLY GRAPH-----------------------------------------------------------//
 
        let P1HG_legendCircle=[];

        let P1HG_grid=[];
        for(let i=0; i<parsedHours_water.length; i++){
            P1HG_grid.push({"value":i});
        }


        var P1_TimezoneGraph = bb.generate({
    size:{
        width:width2,
        height:height2

    },
    padding:{
        bottom:0,
        right: 30
    },
    data:{
        columns:[
            ["cheating", 50, 100, 150], 
            //testHour3,
            hourlyWaterIntake 
        ],
        type: "bubble",
        colors:{
            "물":"#56A4FF",
            "cheating":"rgb(247, 247, 247)"

        },
    
    },

    onrendered: function() {

            
        console.log(document.getElementById("P1_TimezoneGraph"));

        /*-----------------------------------circle design------------------------------------------------ */

        let elem0=$(".P1_TimezoneGraph").find(".bb-circles-물").find("circle").each(function(i){ //circle centering
            $(this).attr("cx", 35)
        })

        /*-----------------------------------Legend design------------------------------------------------ */
        //let P1HG_legendCircle=[];
        let elem1=$(".P1_TimezoneGraph").find(".bb-circles-cheating").find("circle").each(function(i){ //circle centering
            if(i==0||i==1||i==2){
                P1HG_legendCircle.push($(this).attr("r"))
            }
        })

        //console.log(P1HG_legendCircle);

    },

    bubble: {
        maxR: 8
    },

    axis:{
        rotated:true,
            x: {
                padding:0,
                type: "category",
                categories: parsedHours_water,
                tick:{
                    show:false
            
                }
                
                
            },
            y: {
                show:false,
                min:0,
                max:150,
                //padding:0
            },



    },

    grid:{
        x: {
        show: false,
        lines:P1HG_grid
            },
        }
    ,


    legend:{
        show:false,
    },

    tooltip:{
        format:{
            value: function(value, ratio, id){
                if(id=="물") 
                {return value;}
                else{return}
            }
        }
    },


    svg: {
        classname: 'P1_TG_SVG'
    },


    bindto:"#P1_TimezoneGraph"
})





    //Drawing Legends
    setTimeout(function(){

    const legend=d3.select("#P1_TimezoneGraph")
    const svg=legend.append("svg")
    .attr("class", "lgd")
    .attr("heigt", "90")
    .attr("width", width2)
    //.append("g").attr("class", "lgd")

    svg.append("text")
    .attr('x', 35)
    .attr('y', 25)
    .attr('fill', 'black')
    .text('물 섭취량')
    .style('font-size', "9px")
    .style('font-weight', 'bold')

    svg.append("circle") // 원형
    .attr("r", P1HG_legendCircle[2])
    .attr("cx", 45)
    .attr("cy", 50)
    .attr("fill", "#56A4FF")
    .style("opacity", 0.5)

    svg.append("text") // text
    .attr('x', 35)
    .attr('y', 75)
    .attr('fill', 'black')
    .text('150ml')
    .style('font-size', '9px')

    svg.append("circle") // 원형
    .attr("r", P1HG_legendCircle[1])
    .attr("cx", 95)
    .attr("cy", 50)
    .attr("fill", "#56A4FF")
    .style("opacity", 0.5)
    
    svg.append("text") // text
    .attr('x', 85)
    .attr('y', 75)
    .attr('fill', 'black')
    .text('100ml')
    .style('font-size', '9px')
    
    svg.append("circle") // 원형
    .attr("r", P1HG_legendCircle[0])
    .attr("cx", 142)
    .attr("cy", 50)
    .attr("fill", "#56A4FF")
    .style("opacity", 0.5)

    svg.append("text") // text
    .attr('x', 135)
    .attr('y', 75)
    .attr('fill', 'black')
    .text('50ml')
    .style('font-size', '9px')
    }, 100)
        
//------------------------------------------------------------------------------------------------------------------------------//


        let P2DG_maxY=dailyMaxPee+(5-dailyMaxPee%5)
        if(20>P2DG_maxY){P2DG_maxY=20;}

        let P2DG_grid=[];
        let P2DG_Y=[];
        for(let i=0; i<=P2DG_maxY/5; i++){
            P2DG_grid.push({"value":i*5})
            P2DG_Y.push(i*5)
        }
        console.log(P2DG_grid);

        let goal_pee1=[];
        for(let i=0; i<14; i++){
            goal_pee1.push(4)
        }
        let goal_pee2=[];
        for(let i=0; i<14; i++){
            goal_pee2.push(7)
        }
        let avgPee=[];
        for(let i=0; i<14; i++){
            avgPee.push(avg_Pee);
        }

        goal_pee1.unshift("목표1");
        goal_pee2.unshift("목표2");
        avgPee.unshift("평균")

        let goal_rect={};




    let P2_dailyGraph=bb.generate({

    size:{
        width: width1,
        height: height1,
    },
    padding:{
        top: 30,
        right: 40,
        bottom: 0,
        left: 30
    },
    data: {
      columns: [
      dailyPeeCount,
      goal_pee1,
      goal_pee2,
      avgPee,
      ],
      type: "line", // for ESM specify as: line()
      colors:{
          "배뇨 횟수":"#F2C94C",
          "목표1":"#03C52E",
          "목표2":"#03C52E",
          "평균":"#F2C94C",
      },
      labels: {
        format: function(v, id, i, j) {
          
            //console.log(v, id, i, j)
            if(id=="배뇨 횟수"){
                if(v>=4 && v<=7){return v};
                if(v==dailyMaxPee){return v};
               
            }
            return;
        },
    }
    
    },
  
    onrendered: function() {

                
        console.log(document.getElementById("P2_DailyGraph"));

        let temp_height=0;
        /*-----------------------------------Drawing "goal rectangle"------------------------------------------------ */
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
            goal_rect["시작 좌표"]={"x":parsedPath[0], "y":parsedPath[1]}
            goal_rect["가로"]={"가로":parsedPath[parsedPath.length-2]-parsedPath[0]}
            goal_rect["높이"]={"높이":temp_height-parsedPath[1]}
            console.log(goal_rect);

        })

        let elem6=$(".P2_DailyGraph").find(".bb-chart-lines").each(function(i){
            console.log(this);
            
            let rect=d3.select(this).append("svg").attr("class","사각형")
            rect.append("rect").attr("x", goal_rect["시작 좌표"]["x"]).attr("y", goal_rect["시작 좌표"]["y"])
            .attr("height", goal_rect["높이"]["높이"])
            .attr("width", goal_rect["가로"]["가로"])
            .attr("fill","#03C52E")
            .style("opacity", "0.13")
            

        })
         

        
  
    },
    axis:{
        x:{
            type: "category",
            categories:days,
            width:10,
            tick:{
                text:{
                    show:true,
                    },
                width: 50,
                },
        },
        y: {
            show:true,
            default: [0, 20],

            //default: [0, P2DG_maxY],
            tick:{
                values: P2DG_Y
                
            },
            max:P2DG_maxY,
            padding:0,
            zerobased:true,
        },
        y2:{
            show:true,
            tick: {
                values: avgPee,
                format:function(d){
                    if(d==avg_Pee){
                        return d;
                        
                    }
                }
                    

            },
            
            
            
        }
    },
    legend:{
        show:false
    },
    grid:{
        y: {
            show: false,
            lines:P2DG_grid
              },
    },
    tooltip:{
        format:{
            value: function(value, ratio, id){
                if(id=="배뇨 횟수") 
                {return value;}
            }
        }

    },
    
    svg:{classname:"P2_DG"},
    bindto: "#P2_DailyGraph"
  });

  //y2 axis design
  setTimeout(function(){
      
        /*-----------------------------------y2 axis design------------------------------------------------ */
        let elem2=$(".P2_DailyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 
                
            if(i!=1){$(this).remove()}
            else{

                d3.select(this).append("text").text("평균").attr("dx", 12).attr("dy",-7)
                
                let text=$(this).find("text").each(function(i){
                    d3.select(this).attr("fill","#F2C94C").attr("font-weight", "bold").style("borderColor", "#F2C94C")

                })
                
                let line=$(this).find("line").each(function(i){
                    d3.select(this).style("stroke", "#F2C94C")
                    //console.log(this);

                })
                
            }
    })

    let elem3=$(".P2_DailyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
        if(i==0){ //change opacity of Y2
            test=this;
            d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
        }
        else{
            //d3.select(this).style('stroke-opacity', 0.5);
        }
    })
  })

    setTimeout(function(){

        //data label modification

        let elem0=$(".P2_DailyGraph").find(".bb-texts-배뇨-횟수").find("text").each(function(i){ //circle centering
            d3.select(this).attr("dy", "20").style("font-weight", "bold")
            //console.log($(this));
        })

    })
  

    setTimeout(function(){
            let elem0=$(".P2_DailyGraph").find(".bb-target-목표1").find("path").each(function(i){ //circle centering
                d3.select(this).style("opacity","0.6" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })
            let elem1=$(".P2_DailyGraph").find(".bb-circles-목표1").each(function(i){ //circle centering
                $(this).remove();
            })
        
            let elem2=$(".P2_DailyGraph").find(".bb-target-목표2").find("path").each(function(i){ //circle centering
                d3.select(this).style("opacity","0.6" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })
            let elem3=$(".P2_DailyGraph").find(".bb-circles-목표2").each(function(i){ //circle centering
                $(this).remove();
            })
            let elem4=$(".P2_DailyGraph").find(".bb-target-평균").find("path").each(function(i){ //circle centering
                d3.select(this).style("opacity","0.8" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })

            let elem5=$(".P2_DailyGraph").find(".bb-circles-평균").each(function(i){ //circle centering
                $(this).remove();
            })


    })
    //legend

    setTimeout(function(){

        const svg=d3.select(".P2_DG")

        //d3.select(".P1_WG")
        svg.append("rect")
        .attr('x', 170)
        .attr('y',11)
        .attr('width','8')
        .attr('height','8')
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
        .attr('x', 185)
        .attr('y',19)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        //d3.select(".P1_WG")
        svg.append("rect")
        .attr('x', 240)
        .attr('y',11)
        .attr('width','8')
        .attr('height','8')
        .attr("fill","#03C52E")
        .style("opacity", 0.7)
    

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 250)
        .attr('y',19)
        .text("배뇨 정상범위 4-7회")
        .style('font-size', '100%')

        //labels
        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 12)
        .attr('y',20)
        .text("회")
        .style('font-size', '100%')
        .style('font-weight','bold')

    })



        let P2WG_maxY=Number(weeklyMaxPee)+Number(5-weeklyMaxPee%5);
        if(20>P2WG_maxY){P2WG_maxY=20;}
        //console.log(P2WG_maxY);
        let P2WG_grid=[];
        for(let i=0; i<=P2WG_maxY/5; i++){
            P2WG_grid.push({"value":i*5})
        }
        console.log(weeklyMaxPee, P2WG_maxY, P2WG_grid);



    let P2_WeeklyGraph=bb.generate({
        size:{
            width:width1,
            height:height1,
        },
        padding:{
            top: 30,
            right: 40,
            //bottom: 30,
            left: 30

        },
        data:{
            columns:[
                weeklyPeeCount,
            ],
            type:"line",
            labels:true,
            colors:{
                "배뇨 횟수": "#EBC747"

            },
        },

        onrendered:function(){
            console.log(document.getElementById("P2_weeklyGraph"));
        },

        axis:{
            x:{
                type: "category",
                categories:weeks,
                width:10,
                tick:{
                    text:{
                        show:true,
                        },
                    width: 50,
                    },
            },

            y: {
                show:true,
                default: [0, 20],

                //default: [0, P2DG_maxY],
                tick:{
                    //values: [300, 600, 900, 1200],
                    stepSize: 5,
                },
                max:P2WG_maxY,
                padding:0,
            },
        },
        legend:{
            show:false
        },
        grid:{
            y: {
                show: false,
                lines:P2DG_grid
                },
        },
        svg:{classname:"P2_WG"},
        bindto: "#P2_weeklyGraph"
        
    })
      //LEGEND
    setTimeout(function(){

        const svg=d3.select(".P2_WG")

        //d3.select(".P1_WG")
        svg.append("rect")
        .attr('x', 280)
        .attr('y',11)
        .attr('width','8')
        .attr('height','8')
        .attr("fill","#F2C94C")

        //d3.select(".P1_WG")
        svg.append("line")
        .attr('x1', 275)
        .attr('y1',15)
        .attr('x2', 293)
        .attr('y2', 15)
        .style("stroke-width", 3)
        .style("stroke", "#F2C94C");   

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 295)
        .attr('y',19)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        
        //labels
        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 12)
        .attr('y',20)
        .text("회")
        .style('font-size', '100%')
        .style('font-weight','bold')

    })

        //data label modification
    setTimeout(function(){


        let elem0=$(".P2_weeklyGraph").find(".bb-texts-배뇨-횟수").find("text").each(function(i){ //circle centering
            d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
            //console.log($(this));
        })

    })



        let P2HG_legendCircle=[];

        let P2HG_grid=[];
        for(let i=0; i<parsedHours_Pee.length; i++){
            P2HG_grid.push({"value":i});
        }

    
        let testPee3=["배뇨 횟수"];
        for(let i=0; i<parsedHours_Pee.length; i++){
            if(i%3==0){
                testPee3.push(20)} 
            else if(i%2==0){
                testPee3.push(5)}
            else{
                testPee3.push(0)}
            }
        //console.log(parsedHours_Pee, testPee3);
    
    var P2_TimezoneGraph = bb.generate({
        size:{
            width:width2,
            height:height2

        },
        padding:{
            bottom:0,
            right: 30,
        
        },
        data:{
            columns:[
                ["cheating", 5, 10, 15], 
                //testPee3,
                hourlyPeeCount
            ],
            type: "bubble",
            colors:{
                "배뇨 횟수":"#FFDB5B",
                "cheating":"rgb(247, 247, 247)"

            },
        
        },

        onrendered: function() {

                
            console.log(document.getElementById("P2_TimezoneGraph"));

            /*-----------------------------------circle design------------------------------------------------ */

            let elem0=$(".P2_TimezoneGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){ //circle centering
                $(this).attr("cx", 35)
                //console.log($(this))
            })

            /*-----------------------------------Legend design------------------------------------------------ */
            //let P1HG_legendCircle=[];
            let elem1=$(".P2_TimezoneGraph").find(".bb-circles-cheating").find("circle").each(function(i){ //circle centering
                if(i==0||i==1||i==2){
                    P2HG_legendCircle.push($(this).attr("r"))
                }
            })

            //console.log(P2HG_legendCircle);

        },

        bubble: {
            maxR: 8
        },

        axis:{
            rotated:true,
                x: {
                    padding:0,
                    type: "category",
                    categories: parsedHours_Pee,
                    tick:{
                        show:false
                
                    }
                    
                    
                },
                y: {
                    show:false,
                    min:0,
                    max:150,
                    //padding:0
                },

        },

        grid:{
            x: {
            show: false,
            lines:P2HG_grid
                },
            }
        ,


        legend:{
            show:false,
        },

        tooltip:{
            format:{
                value: function(value, ratio, id){
                    if(id=="배뇨 횟수") 
                    {return value;}
                    else{return}
                }
            }
        },


        svg: {
            classname: 'P2_TG_SVG'
        },


        bindto:"#P2_TimezoneGraph"
    })

  
        //Drawing Legends
        setTimeout(function(){

            const legend=d3.select("#P2_TimezoneGraph")
            const svg=legend.append("svg")
            .attr("class", "lgd")
            .attr("heigt", "90")
            .attr("width", width2)
            //.append("g").attr("class", "lgd")
    
            svg.append("text")
            .attr('x', 35)
            .attr('y', 25)
            .attr('fill', 'black')
            .text('배뇨 횟수')
            .style('font-size', "9px")
            .style('font-weight', 'bold')
    
            svg.append("circle") // 원형
            .attr("r", P2HG_legendCircle[2])
            .attr("cx", 45)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
    
            svg.append("text") // text
            .attr('x', 35)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('15회')
            .style('font-size', '9px')
    
            svg.append("circle") // 원형
            .attr("r", P2HG_legendCircle[1])
            .attr("cx", 95)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
            
            svg.append("text") // text
            .attr('x', 85)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('10회')
            .style('font-size', '9px')
            
            svg.append("circle") // 원형
            .attr("r", P2HG_legendCircle[0])
            .attr("cx", 142)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
    
            svg.append("text") // text
            .attr('x', 135)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('5회')
            .style('font-size', '9px')
            }, 100)


        
        let P3DG_maxY=dailyMaxPoop;
        if(P3DG_maxY<=4){P3DG_maxY=4}
        let testPoop1=["배변", 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        console.log(P3DG_maxY)
        let P3DG_grid=[];
        for(let i=0; i<=P3DG_maxY/1; i++){
            P3DG_grid.push({"value":i})
        }
        console.log(P3DG_grid)



    var P3_DailyGraph = bb.generate({
        size:{
            height:140
        },
        padding:{
            top:20,
            bottom:20,
        },
        data: {
            columns: [
            //testPoop1,
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
        axis:{
            x:{
                type: "category",
                categories:days,
                width:10,
                tick:{
                    text:{
                        show:true,
                        },
                    width: 50,
                    },
            },
            y: {
                show:true,
                default: [0, 4],
    
                //default: [0, P2DG_maxY],
                tick:{
                    //values: [0, 1, 2, 3, 4, 5],
                    stepSize: 1,
                },
                max:P3DG_maxY,
                padding:0,
            }  ,
        

        },
        grid:{
            y:{
                show:false,
                lines:P3DG_grid,
                front:false,
            }

        },
        bar: {
            width: {
            ratio: 0.5
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
        
        
        setTimeout(function(){

            const svg=d3.select(".P3_DG_SVG").append("g").attr("class", "legend_P3DG")

            svg.append('image')
            .attr('xlink:href', "../IMG/poo/normal.png")
            .attr('width', 13)
            .attr('height', 13)
            .attr("x", "295")
            .attr("y", "8")
    
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 310)
            .attr('y',19)
            .text("건강한 대변")
            .style('font-size', '100%')

 

            svg.append('image')
            .attr('xlink:href', "../IMG/poo/hard.png")
            .attr('width', 18)
            .attr('height', 18)
            .attr("x", "370")
            .attr("y", "5")
    
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 390)
            .attr('y',19)
            .text("딱딱한 대변")
            .style('font-size', '100%')

            
            svg.append('image')
            .attr('xlink:href', "../IMG/poo/liquid.png")
            .attr('width', 18)
            .attr('height', 18)
            .attr("x", "455")
            .attr("y", "5")

            svg.append("text")
            .attr('x', 480)
            .attr('y',19)
            .text("묽은 대변")
            .style('font-size', '100%')
    
            //labels
            //d3.select(".P1_WG")
            svg.append("text")
            .attr('x', 15)
            .attr('y',15)
            .text("회")
            .style('font-size', '100%')
            .style('font-weight','bold')



            const normal="../JS/IMG/건강한 대변";
            svg.append('img').attr('src', normal);

    
        })

        setTimeout(function(){

            let x_loc=[]

            let grid_height0=0;
            let grid_height1=0;
            let size=0;

            let elem0=$(".P3_DailyGraph").find(".bb-ygrid-lines").find("line").each(function(i){ //circle centering
                //d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
                //console.log(this);
                if(i==0){grid_height1=$(this).attr("y2")}
                if(i==1){grid_height0=$(this).attr("y2")}
                //console.log(grid_height1, grid_height0)
            })
            size=grid_height1-grid_height0
            console.log(size)


            let elem1=$(".P3_DailyGraph").find(".bb-circles-대변").find("circle").each(function(i){ //circle centering
                //d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
                x_loc.push($(this).attr("cx")-5)
                $(this).remove()
                //console.log(this);
            })
            console.log(x_loc)

            const mainChart=d3.select(".P3_DG_SVG").select(".bb-chart")
            console.log(mainChart)

            for(let i=0; i<dailyPoopArray.length; i++){

                let y=50;
                for(let j=0; j<dailyPoopArray[i].length; j++){

                    let temp=dailyPoopArray[i][j]
                    if(temp==0){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/unknown_poop.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y)//y)
                        y=y-size

                    }
                    else if(temp>0 && temp<3){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/hard.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y)//y)
                        y=y-size
                    }
                    else if(temp==3 || temp==4){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/normal.png")
                        .attr('width', size-3)
                        .attr('height', size-3)
                        .attr("x", x_loc[i])
                        .attr("y", y+1)//y)
                        y=y-size
                    }
                    else if(temp>4 && temp<=7){
                        //console.log("START")
                        mainChart.append('image')
                        .attr('xlink:href', "../IMG/poo/liquid.png")
                        .attr('width', size)
                        .attr('height', size)
                        .attr("x", x_loc[i])
                        .attr("y", y)//y)
                        y=y-size
                    }
                    else{console.log("(POOP) TYPE INPUT ERROR!!!!!")}
                }
            }

        })


            
        let P3WG_maxY=Number(weeklyMaxPoop)+Number(2-(weeklyMaxPoop%2))
        if(4>P3WG_maxY){P3WG_maxY=4;}

        let P3WG_grid=[];
        for(let i=0; i<=P3WG_maxY/2; i++){
            P3WG_grid.push({"value":i*2})
        }
        console.log(P3WG_maxY, P3WG_grid)

    let P3_weeklyGraph=bb.generate({

        size:{
            height: 150,
            width: 523
        },
        padding:{
            top:20,
            bottom:0,
            right:20
        },

        data: {
            columns: [
            weeklyPoopCount,
            weeklyHealthyPoopCount
            ],
            type: "line", // for ESM specify as: line()
            colors:{
                "총 배변 횟수":"#C4C4C4",
                "건강한 배변 횟수":"#8B5A3C"
            },
            labels:{
                show:true,
            }
            
            },
        line: {
            connectNull: true,
            zerobased: true
        },
        axis:{
            x:{
                type: "category",
                categories:weeks,
                width:10,
                tick:{
                    text:{
                        show:true,
                        },
                    width: 50,
                    },
            },
    
            y: {
                show:true,
                default: [0, 4],
    
                //default: [0, P2DG_maxY],
                tick:{
                    //values: [300, 600, 900, 1200],
                    stepSize: 2,
                },
                max:P3WG_maxY,
                padding:0,
            },
        },
        legend:{
            show:false,
        },
        grid:{
            y:{
                show:false,
                lines:P3WG_grid,
            }

        },
        svg: {
            classname: 'P3_WG'
            },
        bindto: "#P3_weeklyGraph"


    })

    setTimeout(function(){

        //data label modification

        let elem0=$(".P3_weeklyGraph").find(".bb-texts-건강한-배변-횟수").find("text").each(function(i){ //circle centering
            d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
            //console.log($(this));
        })

    })
    setTimeout(function(){

                const svg=d3.select(".P3_WG")
            
                //d3.select(".P1_WG")
                svg.append("rect")
                .attr('x', 340)
                .attr('y',11)
                .attr('width','8')
                .attr('height','8')
                .attr("fill","#8B5A3C")
            
                //d3.select(".P1_WG")
                svg.append("line")
                .attr('x1', 335)
                .attr('y1',15)
                .attr('x2', 353)
                .attr('y2', 15)
                .style("stroke-width", 3)
                .style("stroke", "#8B5A3C");   
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 355)
                .attr('y',19)
                .text("건강한 배변 횟수")
                .style('font-size', '100%')
            
                //d3.select(".P1_WG")
                svg.append("rect")
                .attr('x', 440)
                .attr('y',11)
                .attr('width','8')
                .attr('height','8')
                .attr("fill","#C4C4C4")
                .style("opacity", 0.7)

                svg.append("line")
                .attr('x1', 435)
                .attr('y1',15)
                .attr('x2', 453)
                .attr('y2', 15)
                .style("stroke-width", 3)
                .style("stroke", "#C4C4C4");                 
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 460)
                .attr('y',19)
                .text("총 배변 횟수")
                .style('font-size', '100%')
            
                //labels
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 15)
                .attr('y',15)
                .text("회")
                .style('font-size', '100%')
                .style('font-weight','bold')
            
              })
            




       
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
            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/');

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
        let temp=Data[i];
        let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/');

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
    //console.log(dailyData);
    return dailyData;


}

   
    //for drawing hourly graph, parse the data and find the start, last index of recorded data(not zero) and hour axis 
    function count_parse_hourly(UserData, count_Hourly, hours, parsedHours){
        //make a new array that contains only values (for drawing graph)
       let originalHourData=count_Hourly(UserData, hours);
       let parsedHourData=[];
       for(let i=0; i<originalHourData.length; i++){
            parsedHourData.push((originalHourData[i]/14).toFixed(2)); //normalization by 2 weeks
            
       }


           //find the start and last hour of water take
       let startIdx=0;
       let lastIdx=23;
   
       for(let i=startIdx; i<lastIdx+1; i++){
           if(parsedHourData[i]!=0){startIdx=i;break;}
       }
   
       for(let i=lastIdx; i>startIdx-1; i--){
           if(parsedHourData[i]!=0){lastIdx=i; break;}
       }


       parsedHourData=parsedHourData.slice(startIdx, lastIdx+1);
       parsedHours=parsedHours.slice(startIdx, lastIdx+1);

       //console.log(parsedHourData, parsedHours);

       return [parsedHourData, parsedHours];
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
            if(i==9){temp="아침 9시";}
            else if(i==12){temp="점심 12시";}
            else if(i==18){temp="저녁 6시";}
            else if(i==21){temp="밤 9시";}
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
