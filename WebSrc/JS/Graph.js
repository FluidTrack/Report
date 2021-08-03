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

    //find current week's index
    let lastidx=-1;
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


    //let week1=1;
    //let week2=2;
    



    let days=key_days(start); //for daily axis and data matching 
    let dates=getDates(start);
    let xDays=getXDays(start);
    console.log(xDays);

    let weeks=["1주차", "2주차", "3주차", "4주차", ] //"5주차", "6주차", "7주차", "8주차"
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

        let weeklyWaterIntake=[0, 0, 0, 0, ] //8 weeks data // 4 weeks data 0, 0, 0, 0

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
        for(let i=0; i<weeklyWaterIntake.length; i++){
            weeklyWaterIntake[i]=parseInt(weeklyWaterIntake[i]*100/7)
        }

        for(let i=lastidx+1; i<weeklyWaterIntake.length; i++){
            weeklyWaterIntake[i]=null;
        }
        weeklyWaterIntake.unshift("물")
        
        console.log(weeklyWaterIntake)







//hourly (normalized)
        let hourlyWater=count_parse_hourly(UserWaterData, count_Hourly, hours, parsed_hours);
        let hourlyWaterIntake=hourlyWater[0];
        let parsedHours_water=hourlyWater[1];

            //count * 100(ml)
        for(let i=0; i<hourlyWaterIntake.length; i++){
            hourlyWaterIntake[i]=parseInt(hourlyWaterIntake[i]*100);
        }
        hourlyWaterIntake.unshift("물");
        console.log(hourlyWaterIntake, parsedHours_water);



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
        let weeklyDrinkIntake=[0, 0, 0, 0, ]; //0, 0, 0, 0

        for(let i=0; i<UserTotalDrinkData.length; i++){
            if(UserTotalDrinkData[i].id==id){
                let time=new Date(UserTotalDrinkData[i].timestamp)
                if(W0<=time && time<W1){weeklyDrinkIntake[0]++}
                else if(W1<=time && time<W2){weeklyDrinkIntake[1]++}
                else if(W2<=time && time<W3){weeklyDrinkIntake[2]++}
                else if(W3<=time && time<W4){weeklyDrinkIntake[3]++}
                /*else if(W4<=time && time<W5){weeklyDrinkIntake[4]++}
                else if(W5<=time && time<W6){weeklyDrinkIntake[5]++}
                else if(W6<=time && time<W7){weeklyDrinkIntake[6]++}
                else if(W7<=time && time<W8){weeklyDrinkIntake[7]++}*/
            }
        }
        for(let i=0; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=parseInt(weeklyDrinkIntake[i]*100/7)
        }

        

        weeklyDrinkIntake.unshift("총 수분 (물+음료)")

        console.log(weeklyDrinkIntake)
        for(let i=1; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=weeklyDrinkIntake[i]+weeklyWaterIntake[i];
        }

        console.log(weeklyDrinkIntake)
        for(let i=lastidx+2; i<weeklyDrinkIntake.length; i++){
            weeklyDrinkIntake[i]=null
        }

        
        let weeklymaxDrink=0;
        for(let i=1; i<weeklyDrinkIntake.length; i++){
            if(weeklyDrinkIntake[i]>weeklymaxDrink){weeklymaxDrink=weeklyDrinkIntake[i]}
        }
        
        console.log(weeklyDrinkIntake)






  



//-----------------------------------------------Pee(daily, weekly, hourly)-----------------------------------//
//daily

        let dailyPeeCount=count_Daily(UserPeeData, days);
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
        let avg_Pee=parseInt(total/14);
        console.log(dailyMaxPee, dailyMinPee, avg_Pee);


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
            weeklyPeeCount[i]=parseInt(weeklyPeeCount[i]/7)//.toFixed(0);
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

        console.log(weeklyPeeCount, weeklyMaxPee)


//hourly (normalized)
let hourlyPeeMax=0;
let hourlyPee=count_parse_hourly(UserPeeData, count_Hourly, hours, parsed_hours);
let hourlyPeeCount=hourlyPee[0];
for(let i=0; i<hourlyPeeCount.length; i++){
    hourlyPeeCount[i]=Number(hourlyPeeCount[i]).toFixed(1)
    if(hourlyPeeMax<hourlyPeeCount[i]){hourlyPeeMax=hourlyPeeCount[i]}
}
let parsedHours_Pee=hourlyPee[1];

hourlyPeeCount.unshift("배뇨 횟수");
console.log(hourlyPeeCount, hourlyPeeMax)
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
        console.log(dailyPoopArray, dailyPoopCount, dailyMaxPoop)

//WEEKLY
        let weeklyPoopCount=[0, 0, 0, 0, ] //8 weeks data //0, 0, 0, 0
        /*for(let i=week2; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=null
        }*/

        let weeklyHealthyPoopCount=[0, 0, 0, 0, ] //0, 0, 0, 0
        /*for(let i=week2; i<weeklyHealthyPoopCount.length; i++){
            weeklyHealthyPoopCount[i]=null
        }*/

        for(let i=0; i<UserTotalPoopData.length; i++){
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

        console.log(weeklyPoopCount, weeklyHealthyPoopCount)
        /*(for(let i=1; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=weeklyPoopCount[i-1]+weeklyPoopCount[i]
            weeklyHealthyPoopCount[i]=weeklyHealthyPoopCount[i-1]+weeklyHealthyPoopCount[i]
        }*/


        for(let i=lastidx+1; i<weeklyPoopCount.length; i++){
            weeklyPoopCount[i]=null;
            weeklyHealthyPoopCount[i]=null;
        }
        console.log(weeklyPoopCount)
        let weeklyMaxPoop=Math.max.apply(null, weeklyPoopCount)

        
        dailyPoopCount.unshift("대변")
        weeklyPoopCount.unshift('총 배변 횟수')
        weeklyHealthyPoopCount.unshift('건강한 배변 횟수')

        //console.log(dailyPoopArray, dailyPoopCount, weeklyPoopCount, weeklyHealthyPoopCount)



//-------------------------------------------------Basic Tick Design----------------------------------------------------------//
        setTimeout(function(){

            let elem0=$(".bb-axis-y").find(".tick").find("line").each(function(i){
                $(this).remove()
            })

            let elem1=$(".bb-axis-x").find(".tick").find("line").each(function(i){
                d3.select(this).style("opacity", 0.5)
            })
    
        })

        /*setTimeout(function(){

            let test00=[]
            let test01=[]
            test00=$(".P1_TimezoneGraph").find(".bb-circles-물").find("circle")
            test01=$(".P2_TimezoneGraph").find(".bb-circles-배뇨-횟수").find("circle")
            console.log("P!", test00, "P2",test01)
        })*/



//P1 Graphs
//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//
//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//


        //Y axis, grid array setting
        let P1DG_maxY;
        let P1DG_grid=[];
        let P1DG_Y=[];

        if(dailymaxDrink>=2000){P1DG_maxY=dailymaxDrink+(600-(dailymaxDrink%600))}
        else if(dailymaxDrink%300==0){
            P1DG_maxY=P1DG_maxY=dailymaxDrink
        }
        else{
            P1DG_maxY=dailymaxDrink+(300-(dailymaxDrink%300));
        }
        if(1200>P1DG_maxY){P1DG_maxY=1200;}


            //grid, Y axis label

        if(P1DG_maxY<2000){        
            for(let i=0; i<=(P1DG_maxY/300); i++){
            P1DG_grid.push({"value":i*300})
            P1DG_Y.push(i*300)
                }
        }
        else if(P1DG_maxY>2000){
            for(let i=0; i<=(P1DG_maxY/600); i++){
                P1DG_grid.push({"value":i*600})
                P1DG_Y.push(i*600)
                    }

        }

        //Y axis, grid array setting
        let P1WG_maxY;
        let P1WG_grid=[];
        let P1WG_Y=[];
        


        if(weeklymaxDrink%300==0){P1WG_maxY=weeklymaxDrink;}
        else{P1WG_maxY=weeklymaxDrink+(300-(weeklymaxDrink%300));}
        if(P1WG_maxY<1200){P1WG_maxY=1200}

        console.log(P1WG_maxY)

        if(P1WG_maxY>2000){
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
            P1DG_Y=P1DG_Y;
        }
        else{
            console.log("ERROR")
        }


        



    var P1_DailyGraph = bb.generate({
        size: {
                height: height1,
                width: width1,
        },
        padding: {
                top: 20,
                right: 40,
                bottom: 0,
                left: 30
            },
        data: {
                
                columns: 

                    [
                        //testWater,
                        //testDrink,
                        goal_water,
                        avg_water,
                        dailyWaterIntake,
                        dailyDrinkIntake,

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
            
            //increase stroke line's length
            setTimeout(function(){

                let temp=document.getElementById("P1_DailyGraph").getElementsByClassName("bb-line-평균") //.find(".bb-line-평균")
                let text=temp[0].getAttribute("d")
                let text2 = text.replace('M10', 'M0')
                let text3 = text2.replace('L270', 'L300')
                temp[0].setAttribute("d", text3)


                let temp1=document.getElementById("P1_DailyGraph").getElementsByClassName("bb-line-목표") //.find(".bb-line-평균")
                let text1=temp1[0].getAttribute("d")
                let text_2 = text1.replace('M10', 'M0')
                let text_3 = text_2.replace('L270', 'L300')
                temp1[0].setAttribute("d", text_3)
            


            })


   
            let elem0=$(".P1_DailyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 
                if(i==0){  //평균 1000ml의 tick index
            
                    d3.select(this).select("line").remove()//style("stroke", "#56A4FF")
                    d3.select(this).select("text").attr("fill", "#56A4FF").attr("font-weight", "bold");
                    d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-7").text("평균");

                    
                    /*MODIFY: 평균을 위아래로 바꾸는 것으로 */
    
                    if(Math.abs(avgWater-1000)<100 && avgWater<=1000){
                        //console.log("START")
                        d3.select(this).select("text").select("tspan").attr("dy","20")
                    }
                    else if(Math.abs(avgWater-1000)<300 && avgWater<=1000){
                        d3.select(this).select("text").select("tspan").attr("dy","10")

                    }
    
                }
                if(i==1){
           
                    
                    d3.select(this).select("line").remove()//.style("stroke", "#03C52E")
                    d3.select(this).select("text").attr("fill", "#03C52E").attr("font-weight", "bold");
                    d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-7").text("목표");
                    //
                    //console.log(Math.abs(avgWater-1000))
                    if(Math.abs(avgWater-1000)<100 && avgWater>1000){
                        //console.log("START")
                        d3.select(this).select("text").select("tspan").attr("dy","20")
                    }
                    else if(Math.abs(avgWater-1000)<300 && avgWater>1000){
                        d3.select(this).select("text").select("tspan").attr("dy","10")

                    }
                    console.log(this)
                    
    
                }
    
    
            });
    
        
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
            show: false,
            /*format:{
                value: function(value, ratio, id){
                    if(id=="물"||id=="총 수분 (물+음료)") 
                    {return value;}
                }
            }*/

        },

        grid:{
            y:{
                //show:true,
                lines:P1DG_grid
            },
            lines:{front: false}
        },
        svg:{classname:"P1_DG"},
        bindto: "#P1_DailyGraph",
    });

    //MODIFY



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


 




   
        
                /*-----------------------------------Y2 Think Domain Design --------------------------------------------*/

                let elem0_P1DG=$(".P1_DailyGraph").find(".bb-axis-y2").find(".domain").each(function(i){
                    if(i==0){ //change opacity of Y2

                        d3.select(this).style('stroke-opacity','0.1').style("stroke","white");
                    }
                    else{
                        //d3.select(this).style('stroke-opacity', 0.5);
                    }
                })




                /*-----------------------------------Water Data label Design --------------------------------------------*/
                let elem1_P1DG=$(".P1_DailyGraph").find(".bb-texts-물").find("text").each(function(i){
                    d3.select(this).style("font-size", "8px")//.style("font-weight", "bold"); //modify font size

                    originalY=parseFloat($(this).attr("y"));  
                    Y=originalY//+10
                    if($(this).text()==maxWater+""){
                        d3.select(this).attr("y", Y)
                    }

                })



                /*-----------------------------------Bar Design--------------------------------------------------------- */

                let elem2_P1DG=$(".P1_DailyGraph").find(".bb-bars-총-수분--물-음료-").find("path").each(function(i){
  
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
                let elem3=$(".P1_DailyGraph").find(".bb-axis-x").find(".tick").each(function(i){
                    d3.select(this).style("font-size", "8px");

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
                .style('font-weight','bold')

      }, 100)


     /*-----------------------------------solution of hidden label, grid--------------------------------------------------------- */
     
     setTimeout(function(){

            
        let temp=$(".P1_DailyGraphDiv").find(".bb-main")
        //let $elem1=$(".P1_DailyGraph").find(".bb-chart-texts").clone().appendTo(temp);
        let $elem2=$(".P1_DailyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

    })






 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------//




    var P1_WeeklyGraph = bb.generate({
        size:{
            height:height1,
            width: width1,

        },
        padding: {
            top: 10,
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

                   // -----------------------------------Data Label position Design------------------------------------------------

                    let elem0=$(".P1_weeklyGraph").find(".bb-chart-texts").find("text").each(function(i){ //Label Position
                        d3.select(this).style("font-size", "9px")//.style("font-weight", "bold");                    


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
                    //show:true,
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


        setTimeout(function(){

            //resize circles
            
        //circle size modify
        $(".P1_weeklyGraph").find(".bb-circles-물").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })
        $(".P1_weeklyGraph").find(".bb-circles-총-수분--물-음료-").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })
        })

 

 

        setTimeout(function(){
                    //Legend
            d3.select(".P1_WG")
            .append("circle")
            .attr('cx', 204)
            .attr('cy',15)
            .attr('r', 4)
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
            .append("circle")
            .attr('cx', 244)
            .attr('cy',15)
            .attr('r', 4)
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
                let temp=Number($(this).text())
                if(temp<=150){
                    d3.select(this).attr("dy", "0")  
                }        


            })

        })

        


        setTimeout(function(){

            
            let temp=$(".P1_weeklyGraphDiv").find(".bb-main")
            let $elem1=$(".P1_weeklyGraph").find(".bb-chart-texts").clone().appendTo(temp);
            let $elem2=$(".P1_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);
    
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

        //-----------------------------------circle design------------------------------------------------ 



        let elem0=$(".P1_TimezoneGraph").find(".bb-circles-물").find("circle").each(function(i){ //circle centering
            $(this).attr("cx", 45)
        })
        


        //-----------------------------------Legend design------------------------------------------------ 
        //let P1HG_legendCircle=[];
        let elem1=$(".P1_TimezoneGraph").find(".bb-circles-cheating").find("circle").each(function(i){ //circle centering
            if(i==0||i==1||i==2){
                P1HG_legendCircle.push($(this).attr("r"))
            }
        })


    },
    

    bubble: {
        /* MODIFY: Grid Height 따라서 유동적으로 버블 크기 조정하기 */
        maxR: 9
    },

    axis:{
        rotated:true,
            x: {
                //padding:0,
                type: "category",
                categories: parsedHours_water,
                tick:{
                    show:false
            
                }
                
                
            },
            y: {
                show:false,
                min:0,
                //max:55,
                //padding:0
            },



    },

    grid:{
        x: {
        show: false,
        lines:P1HG_grid
            },
        //lines:{front: false}
        }
    ,


    legend:{
        show:false,
    },

    tooltip:{
        show:false
        /*
        format:{
            value: function(value, ratio, id){
                if(id=="물") 
                {return value;}
                else{return}
            }
        }*/
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
    .attr("r", P1HG_legendCircle[2]*1.25)
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
    .attr("r", P1HG_legendCircle[1]*1.25)
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
    .attr("r", P1HG_legendCircle[0]*1.25)
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


        //for drawing max Y value, grid lines
        let P2DG_maxY;
        
        if(dailyMaxPee%5==0){
            P2DG_maxY=dailyMaxPee;
        }
        else{
            P2DG_maxY=dailyMaxPee+(5-dailyMaxPee%5)
        }

        if(dailyMaxPee>20){
            P2DG_maxY=dailyMaxPee+(10-dailyMaxPee%10)
        }

        if(20>=P2DG_maxY){P2DG_maxY=20;}

        let P2DG_grid=[];
        let P2DG_Y=[];

        if(P2DG_maxY<=20){
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

        //P2DG_grid.shift() //remove '0' grid 

        console.log(P2DG_grid, P2DG_Y, P2DG_maxY);

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


        //for drawing max Y value, grid lines
        let P2WG_maxY=weeklyMaxPee;
        
        if(P2WG_maxY%5==0){
            P2WG_maxY=weeklyMaxPee

        }
        else{
            P2WG_maxY=Number(weeklyMaxPee)+Number(5-weeklyMaxPee%5);
        }

        if(20>=P2WG_maxY){P2WG_maxY=20;}
        //console.log(P2WG_maxY);
        let P2WG_grid=[];
        let P2WG_Y=[];

        if(P2WG_maxY>20){

            for(let i=0; i<=(P2WG_maxY/10); i++){
                P2WG_grid.push({"value":i*10})
                P2WG_Y.push(i*10)
            }

        }
        else{
            for(let i=0; i<=(P2WG_maxY/5); i++){
                P2WG_grid.push({"value":i*5})
                P2WG_Y.push(i*5)
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
            P2DG_Y=P2DG_Y;
        }
        else{
            console.log("ERROR")
        }




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
                if(v==dailyMinPee){return v};
                if(v==dailyMaxPee){return v};
               
            }
        },
    }
    
    },



    onrendered: function(){

        console.log(document.getElementById("P2_DailyGraph"));
        
        let elem2=$(".P2_DailyGraph").find(".bb-axis-y2").find(".tick").each(function(i){ 

            d3.select(this).select("line").style("stroke", "#F2C94C")
            d3.select(this).select("text").attr("fill", "#F2C94C").attr("font-weight", "bold");
            d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-7").text("평균");
        
        })

          //Data Label Design. Yello To Green if data is between 4 to 7
        /*let elem0_P2DG=$(".P2_DailyGraph").find(".bb-texts-배뇨-횟수").find("text").each(function(i){
            let temp=Number($(this).text())
            if(temp>=4 && temp<=7){
                d3.select(this).style("fill", "#03C52E")
            }


    })*/

    },
  

    axis:{
        x:{
            type: "category",
            categories: xDays,
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

            //default: [0, P2DG_maxY],
            tick:{
                values: P2DG_Y
                
            },
            max:P2DG_maxY+5,
            min:0,
            zerobased:true,
            padding:0

        },
        y2:{
            show:true,
            tick: {
                values: [avg_Pee],

                    

            },
            
            
            
        }
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
        /*
        format:{
            value: function(value, ratio, id){
                if(id=="배뇨 횟수") 
                {return value;}
            }
        }*/

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



  
  setTimeout(function(){

            
    let temp=$(".P2_DailyGraphDiv").find(".bb-main")
    //let $elem1=$(".P2_DailyGraph").find(".bb-chart-texts").find(".bb-target-배뇨-횟수").clone()//.unwrap().appendTo(temp);
    //console.log($elem1)
    let $elem2=$(".P2_DailyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

  })

  setTimeout(function(){
      //increase stroke line's length
      let temp=document.getElementById("P2_DailyGraph").getElementsByClassName("bb-line-평균") //.find(".bb-line-평균")
      let text=temp[0].getAttribute("d")
      let text2 = text.replace('M10', 'M0')
      let text3 = text2.replace('L270', 'L300')
      temp[0].setAttribute("d", text3)
  
      let temp2=$(".P2_DailyGraph").find(".bb-axis-y2").find("line").each(function(i){
          this.remove()

      })

  })





  setTimeout(function(){

    $(".P2_DailyGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){

        d3.select(this).attr("r", 1)
        console.log(this.getAttribute("r"))
    })

    
    let temp_height=0;
    //-----------------------------------Drawing "goal rectangle"------------------------------------------------ 
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
        console.log(goal_rect);

    })

  

    let elem6=$(".P2_DailyGraph").find(".bb-chart-lines").each(function(i){
        //console.log(this);
        
        let rect=d3.select(this).insert("svg",":first-child")//.append("svg").attr("class","사각형")
        rect.append("rect").attr("x", goal_rect["시작 좌표"]["x"]).attr("y", goal_rect["시작 좌표"]["y"])
        .attr("height", goal_rect["높이"]["높이"])
        .attr("width", goal_rect["가로"]["가로"])
        .attr("fill","#03C52E")
        .style("opacity", "0.13")
        

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



//data label design
    setTimeout(function(){

        let elem0=$(".P2_DailyGraph").find(".bb-texts-배뇨-횟수").find("text").each(function(i){ 
            d3.select(this).style("font-size","10px").attr("dy", "2")//.style("font-weight", "bold")
            //console.log($(this));
        })

    })


  
//Goal, Average Path Design
    setTimeout(function(){
            let elem0=$(".P2_DailyGraph").find(".bb-target-목표1").find("path").each(function(i){ 
                d3.select(this).style("opacity","0.6" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })
            let elem1=$(".P2_DailyGraph").find(".bb-circles-목표1").each(function(i){ 
                $(this).remove();
            })
        
            let elem2=$(".P2_DailyGraph").find(".bb-target-목표2").find("path").each(function(i){ 
                d3.select(this).style("opacity","0.6" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })
            let elem3=$(".P2_DailyGraph").find(".bb-circles-목표2").each(function(i){
                $(this).remove();
            })
            let elem4=$(".P2_DailyGraph").find(".bb-target-평균").find("path").each(function(i){ 
                d3.select(this).style("opacity","0.8" ).attr("stroke-dasharray", "3 3")
                //console.log($(this));
            })

            let elem5=$(".P2_DailyGraph").find(".bb-circles-평균").each(function(i){ 
                $(this).remove();
            })


    })

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





    let P2_WeeklyGraph=bb.generate({
        size:{
            width:width1,
            height:height1+30,
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
        line:{
            zerobased: true,
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
                //default: [0, 20],

                //default: [0, P2DG_maxY],
                tick:{
                    values: P2WG_Y,
                    tick:5
                },
                max:P2WG_maxY,
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
      //LEGEND
    setTimeout(function(){

        const svg=d3.select(".P2_WG")

        //d3.select(".P1_WG")
        svg.append("circle")
        .attr('cx', 284)
        .attr('cy',32)
        .attr('r', 4)
        .attr("fill","#F2C94C")

        //d3.select(".P1_WG")
        svg.append("line")
        .attr('x1', 275)
        .attr('y1',32)
        .attr('x2', 293)
        .attr('y2', 32)
        .style("stroke-width", 3)
        .style("stroke", "#F2C94C");   

        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 295)
        .attr('y',35)
        .text("배뇨 횟수")
        .style('font-size', '100%')

        
        //labels
        //d3.select(".P1_WG")
        svg.append("text")
        .attr('x', 12)
        .attr('y',40)
        .text("회")
        .style('font-size', '100%')
        .style('font-weight','bold')

    })

        //data label modification
    setTimeout(function(){


        let elem0=$(".P2_weeklyGraph").find(".bb-texts-배뇨-횟수").find("text").each(function(i){ 
            d3.select(this).style("font-size", "10px")//.style("font-weight", "bold")//.attr("dy", "20")
            //console.log($(this));
        })

    })


    setTimeout(function(){

            
        let temp=$(".P2_weeklyGraphDiv").find(".bb-main")
        //let $elem1=$(".P2_weeklyGraph").find(".bb-chart-texts").clone().appendTo(temp);
        let $elem2=$(".P2_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);



        //circle size modify
        $(".P2_weeklyGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })

    })



        let P2HG_legend_width=[];
        let P2HG_legend_height=[];

        let P2HG_grid=[];
        for(let i=0; i<parsedHours_Pee.length; i++){
            P2HG_grid.push({"value":i});
        }
        console.log(P2HG_grid)

        let P2HG_Ytick=[];
        let P2HG_Ygrid=[];
        if(hourlyPeeMax>3){

            for(let i=0; i<hourlyPeeMax/1; i++){
                console.log(hourlyPeeMax + " is over 1.5")
                P2HG_Ytick.push(i)
                P2HG_Ygrid.push({value:i, text:""})
            }
        }
        else{
            console.log(hourlyPeeMax + " is less than 1.5")
            for(let i=0; i<hourlyPeeMax/0.5; i++){
                P2HG_Ytick.push(i*0.5)
                P2HG_Ygrid.push({value:i*0.5, text:""})
            }

        }
        console.log(P2HG_Ytick, P2HG_Ygrid)

    
    var P2_TimezoneGraph = bb.generate({
        size:{
            width:width2,
            height:height2+80

        },
        padding:{
            bottom:0,
            right: 30,
        
        },
        data:{
            columns:[
                ["cheating", 0.5, 1, 1.5], 
                //testPee3,
                hourlyPeeCount
            ],
            type: "bar",
            colors:{
                "배뇨 횟수":"#FFDB5B",
                "cheating":"rgb(247, 247, 247)"

            },
        
        },

        onrendered: function() {

                
            console.log(document.getElementById("P2_TimezoneGraph"));

            /*//-----------------------------------circle design------------------------------------------------ 

            let elem0=$(".P2_TimezoneGraph").find(".bb-circles-배뇨-횟수").find("circle").each(function(i){ //circle centering
                $(this).attr("cx", 45)
                //console.log($(this))
            })*/

            //-----------------------------------Legend design------------------------------------------------ 
 
            let elem1=$(".P2_TimezoneGraph").find(".bb-bars-cheating").find("path").each(function(i){ 
                if(i==0||i==1||i==2){
                    //console.log(this)
                    //P2HG_legendCircle.push($(this).attr("r"))
                }
            })

            //console.log(P2HG_legendCircle);

        },
        

        /*bubble: {
            maxR: 8
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
                    //max:,
                    padding:0
                },

        },

        grid:{
            x: {
                show: false,
                lines:P2HG_grid
                    
            //lines:{front: false}
            },
            y:{
                show:true,
                //lines:P2HG_Ygrid,
            }
        }
        ,


        legend:{
            show:false,
        },

        tooltip:{
            show:false,
            /*format:{
                value: function(value, ratio, id){
                    if(id=="배뇨 횟수") 
                    {return value;}
                    //else{return}
                }
            }*/
        },


        svg: {
            classname: 'P2_TG_SVG'
        },


        bindto:"#P2_TimezoneGraph"
    })

    $(".P2_TimezoneGraph").find(".bb-ygrids").attr("opacity", "0.5")
  /*
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
            .attr("r", P2HG_legendCircle[2]*1.2)
            .attr("cx", 45)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
    
            svg.append("text") // text
            .attr('x', 35)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('1.5회')
            .style('font-size', '9px')
    
            svg.append("circle") // 원형
            .attr("r", P2HG_legendCircle[1]*1.2)
            .attr("cx", 95)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
            
            svg.append("text") // text
            .attr('x', 85)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('1회')
            .style('font-size', '9px')
            
            svg.append("circle") // 원형
            .attr("r", P2HG_legendCircle[0]*1.2)
            .attr("cx", 142)
            .attr("cy", 50)
            .attr("fill", "#FFDB5B")
            .style("opacity", 0.5)
    
            svg.append("text") // text
            .attr('x', 135)
            .attr('y', 75)
            .attr('fill', 'black')
            .text('0.5회')
            .style('font-size', '9px')
            }, 100)
            
*/

        
        let P3DG_maxY=dailyMaxPoop;
        if(P3DG_maxY<=3){P3DG_maxY=3}
        
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
            top:40,
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
        onresized: function(){
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
                default: [0, 3],
    
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
                //show:true,
                lines:P3DG_grid,
            },
            lines:{
                front:false
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

       //fill weekend with red 
       setTimeout(function(){
        let elem0=$(".P3_DailyGraph").find(".bb-axis-x").find("tspan").each(function(i){

                if(dates[i]==0||dates[i]==6){
                d3.select(this).style("fill","red");
                }

        })
        
})  
        
       setTimeout(function(){

            
            let temp=$(".P3_DailyGraphDiv").find(".bb-main")
            //let $elem1=$(".P3_DailyGraph").find(".bb-chart-texts").clone().appendTo(temp);
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
                //d3.select(this).attr("dy", "20").style("font-weight", "bold").style("font-size", "9")
                //console.log(this);
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
                x_loc.push($(this).attr("cx")-5)
                $(this).remove()
                //console.log(this);
            })
            console.log("P3DG X, Y loc", x_loc, y_loc)

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
                        .attr("x", x_loc[i])
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
                        .attr("y", y_loc[j])//y)

                    }
                    else{console.log("(POOP) TYPE INPUT ERROR!!!!!")}
                }
            }

            let gridHeight=grid_height1-grid_height0;
            console.log(gridHeight, grid_height1, grid_height0);
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
            .attr('y',20)
            .text("회")
            .style('font-size', '100%')
            .style('font-weight','bold')



            const normal="../JS/IMG/건강한 대변";
            svg.append('img').attr('src', normal);

    
        })

       


            
        let P3WG_maxY = weeklyMaxPoop;
        if(weeklyMaxPoop%2==0){}
        else{
            P3WG_maxY = Number(weeklyMaxPoop)+Number(2-(weeklyMaxPoop%2))

        }
        

        if(8>P3WG_maxY){P3WG_maxY=8;}

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

        console.log(P3WG_maxY, P3WG_grid, P3WG_Y)


    let P3_weeklyGraph=bb.generate({

        size:{
            height: 170,
            width: 523
        },
        padding:{
            top:40,
            bottom:20,
            //right:20
        },
        
        onrendered: function(){

            console.log(document.getElementById("P3_weeklyGraph"));


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
                categories: weeks,
                width:10,
                tick:{
                    text:{
                        show:true
                    },
                    width: 50,
                    },
            },
    
            y: {
                show:true,
               
    
                //default: [0, P2DG_maxY],
                tick:{
                    values:P3WG_Y
                },
                max:P3WG_maxY+3,
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

        //data label modification

        let elem0=$(".P3_weeklyGraph").find(".bb-texts-건강한-배변-횟수").find("text").each(function(i){ //circle centering
            d3.select(this).attr("dy", "16").style("font-size", "9")//.style("font-weight", "bold")
            temp=Number($(this).text())
            if(temp==0){
                d3.select(this).attr("dy", "0")
            }
            //console.log($(this));
        })

        let elem1=$(".P3_weeklyGraph").find(".bb-texts-총-배변-횟수").find("text").each(function(i){ //circle centering
            d3.select(this).attr("dy", "2").style("font-size", "9")//.style("font-weight", "bold")
            temp=Number($(this).text())
            /*if(temp<=2){
                d3.select(this).attr("dy", "0")
            }*/
            //console.log($(this));
        })

        $(".P3_weeklyGraph").find(".bb-circles-총-배변-횟수").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })
        $(".P3_weeklyGraph").find(".bb-circles-건강한-배변-횟수").find("circle").each(function(i){

            d3.select(this).attr("r", 1)
        })


    




    })

    setTimeout(function(){

        let temp=$(".P3_weeklyGraphDiv").find(".bb-main")
        //let $elem1=$(".P3_weeklyGraph").find(".bb-chart-texts").clone().appendTo(temp);
        let $elem2=$(".P3_weeklyGraph").find(".bb-ygrid-lines").clone().appendTo(temp);

      })

    setTimeout(function(){

                const svg=d3.select(".P3_WG")
            
                //d3.select(".P1_WG")
                svg.append("circle")
                .attr('cx', 344)
                .attr('cy', 25)
                .attr("r", 4)
                .attr("fill","#8B5A3C")
            
                //d3.select(".P1_WG")
                svg.append("line")
                .attr('x1', 335)
                .attr('y1',25)
                .attr('x2', 353)
                .attr('y2', 25)
                .style("stroke-width", 3)
                .style("stroke", "#8B5A3C");   
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 355)
                .attr('y',29)
                .text("건강한 배변 횟수")
                .style('font-size', '100%')
            
                //d3.select(".P1_WG")
                svg.append("circle")
                .attr('cx', 449)
                .attr('cy',25)
                .attr("r", 4)
                .attr("fill","#C4C4C4")
                .style("opacity", 0.7)

                svg.append("line")
                .attr('x1', 440)
                .attr('y1', 25)
                .attr('x2', 458)
                .attr('y2', 25)
                .style("stroke-width", 3)
                .style("stroke", "#C4C4C4");                 
            
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 460)
                .attr('y',29)
                .text("총 배변 횟수")
                .style('font-size', '100%')
            
                //labels
                //d3.select(".P1_WG")
                svg.append("text")
                .attr('x', 15)
                .attr('y',43)
                .text("회")
                .style('font-size', '100%')
                .style('font-weight','bold')

                
                let temp0=$(".P3_weeklyGraph").find(".bb-main")
                let $elem1=$(".P3_weeklyGraph").find(".bb-chart-texts").clone().appendTo(temp0);
            
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
        if(Data[i].type>8 || Data[i].type<0){console.log("WRONG POO TYPE INPUT")}
        else{
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

    }
    //console.log(dailyData);
    return dailyData;


}

   
    //for drawing hourly graph, parse the data and find the start, last index of recorded data(not zero) and hour axis 
    function count_parse_hourly(UserData, count_Hourly, hours, parsedHours){
        //make a new array that contains only values (for drawing graph)
       let originalHourData=count_Hourly(UserData, hours);
       console.log(originalHourData)
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

    function getXDays(start){
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

    function getDates(start){
        
        let day = new Date(start);
        let dates=[];
 
        for(let i=0; i<14; i++){
            dates.push(day.getDay()); //In data object. Month ranges from 0 to 11. [month, day, count]
            day.setDate(day.getDate()+1);
            
        }
        console.log(dates)

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