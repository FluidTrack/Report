let UserWaterData = null
let UserDrinkData = null
let UserPoopData = null
let UserPeeData = null

let DataLoadComplete = (startDateStamp) => {

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
    //===============================================================================================================
    let start=startDateStamp
    let height1=142;
    let width1=350;

    let height2=290;
    let width2=165;

    week1=1;
    week2=2;


    let days=key_days(start); //for daily axis and data matching 
    let weeks=["1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"]
    let hours=key_hours();
    let parsed_hours=parsing_hours(); //for hourly axis


    //-------------------------------------------WATER(daily, weekly, hourly )--------------------------------------------//
   
   //daily
    let daily_water_count=ccl_Day_Hour(UserWaterData, days, hours)[0]; 
    let daily_water_Values=["물"];

        //find the max, min amount of water intake, calculate average, count*100(ml)
        let firstKey=Object.keys(daily_water_count)[0];
    let maxWater=daily_water_count[firstKey]*100;
    let minWater=daily_water_count[firstKey]*100;
    let total_water=0;

    for(var key in daily_water_count){
        let temp=daily_water_count[key]*100;
        total_water+=temp;
        daily_water_Values.push(temp);
        if(temp<minWater){minWater=temp;}
        if(temp>maxWater){maxWater=temp;}
    }
    let average_water=parseInt(total_water/14);
    

    //weekly  ******************************************추후 다른 주 데이터도 받아와야함 *************************

    let weekly_water_Values=['물', 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i=1; i<daily_water_Values.length; i++){
        if(i<7){
            weekly_water_Values[week1]+=daily_water_Values[i];
        }
        else{
            weekly_water_Values[week2]+=daily_water_Values[i];
        }
    }
    weekly_water_Values[week1]=parseInt(weekly_water_Values[week1]/7);
    weekly_water_Values[week2]=parseInt(weekly_water_Values[week2]/7);
    console.log(weekly_water_Values);




    //hourly
    let hourly_water=hourlyData(UserWaterData, ccl_Day_Hour, days, hours, parsed_hours);
    let hourly_water_Values=hourly_water[0];
    let parsed_hours_water=hourly_water[1];

        //count * 100(ml)
    for(let i=0; i<hourly_water_Values.length; i++){
        hourly_water_Values[i]=parseInt(hourly_water_Values[i]*100);
    }
    hourly_water_Values.unshift("물");



    //-------------WATER INTAKE GOAL(for drawing graph-------------------//
    let goal_water=["목표"];
    for(let i=0; i<14; i++){
        goal_water.push(1000);
        }
    //-------------WATER INTAKE AVERAGE(for drawing graph----------------//

    let avg_water=["평균"];
    for(let i=0; i<14; i++){
        avg_water.push(average_water);
        }


    //-----------------------------------------------DRINK(only daily, weekly)-----------------------------------//
    //daily
    let daily_drink=ccl_Day_Hour(UserDrinkData, days, hours)[0];
        //add water logs to drink logs for drawing a graph (daily)
    for(key in daily_drink){
        if(key in daily_water_count){
            daily_drink[key]+=daily_water_count[key]; 

        }
        else{
            console.log("ERROR");
        }
    }

        //DRINK: make an array for value of graph
    let daily_drink_Values=["총 수분 (물+음료)"];
    for(var key in daily_drink){
        daily_drink_Values.push(daily_drink[key]*100);
    }

    //weekly ******************************************추후 다른 주 데이터도 받아와야함 *************************
    let weekly_drink_Values=["총 수분 (물+음료)", 0, 0, 0, 0, 0, 0, 0, 0];
    for(let i=1; i<daily_drink_Values.length;i++){
        if(i<7){weekly_drink_Values[week1]+=daily_drink_Values[i];}
        else{weekly_drink_Values[week2]+=daily_drink_Values[i];}
    }

    weekly_drink_Values[week1]=parseInt(weekly_drink_Values[week1]/7);
    weekly_drink_Values[week2]=parseInt(weekly_drink_Values[week2]/7);
  


//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//
//-------------------------------------------------WATER DAILY GRAPH----------------------------------------------------------//
    var P1_DailyGraph = bb.generate({
        size: {
                height: height1,
                width: width1,
          },
        padding: {
                top: 30,
                right: 40,
                bottom: 25,
                left: 30
            },
        data: {
                
                columns: 
                    [daily_drink_Values,
                    daily_water_Values,
                    goal_water,
                    avg_water
                    ],
                axes:{
                    "물":"y",
                    "총 수분 (물+음료)":"y",
                    "avg_water":"y2"

                },
                groups: [
                    [
                        "물",
                        "총 수분 (물+음료)"
                    ]
                      ],
                
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
                            if(d>=1200){return d;} //if water intake amount is greater than 1200ml, use same bar height for all but shosw it's data label.
                            if(d==maxWater||d==minWater){return d;} //show only minimum and miximum value of water intake. 
                        }
                    },
                }
                        
            },
        onrendered: function() {

                
                console.log(document.getElementById("P1_DailyGraph"));


                let temp=0; //Add new line "평균" to average amount of water intake, and Change it's text color
                let elem=$(".P1_DailyGraph").find(".tick").each(function(i){ 
                    if(i==18){  //평균 1000ml의 tick index
                        temp=this;
                        d3.select(this).select("text").attr("fill", "#56A4FF").attr("font-weight", "bold");
                        d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 0).attr("dy", "-10").text("평균");

                    }
                    if(i==19){
                        temp=this;
                        d3.select(this).select("text").attr("fill", "#03C52E").attr("font-weight", "bold");
                        d3.select(this).select("text").append("tspan").attr("x", 8).attr("dx", 1).attr("dy", "-10").text("목표");

                    }
                });
                console.log(temp);

                //console.log(document.getElementsByClassName("bb-axis bb-axis-y2"));
                //const test=d3.select("#P1_DailyGraph").select("#bb-axis bb-axis-y2").select("#tick").selectAll("Div").append("Div");
                //console.log(test);

        
            },

        bar: {
 
                width: {
                    "물": 10,
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
                    height:5,
                    tick:{
                        text:{
                            show:true,
                            },
                        width: 100,
                        },
                    },

                    y: {
                        show:true,
                        default: [0, 1200],
                        tick:{
                            values: [300, 600, 900, 1200],
                        },
                        max:1500,
                        padding:0,
                    },
                    
                    y2:{
                        show:true,
                        tick: {
                            values: [average_water, 1000],
                            format: function(data){
                                console.log(data);
                                return data; //+"ml"
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
                lines:[
                    {value: 0, },
                    {value: 300, },
                    {value: 600, },
                    {value: 900, },
                    {value: 1200,},
                 ],
            },
            lines:{front: false}
        },
        svg:{classname:"P1_DG"},
        bindto: "#P1_DailyGraph",
      });




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

                    /*d3.select(".P1_DG")
                    .append("text")
                    .attr('x', 320)
                    .attr('y',43)
                    .text("목표")
                    .style('font-size', '80%')

                    d3.select(".P1_DG")
                    .append("text")
                    .attr('x', 315)
                    .attr('y',52)
                    .text("1000ml")
                    .style('font-size', '80%')

                    d3.select(".P1_DG")
                    .append("line")
                    .attr('x1', 309)
                    .attr('y1',48)
                    .attr('x2', 313)
                    .attr('y2',48)*/
      }, 100)
 

 //------------------------------------------------------------------------------------------------------------------------------//



 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER WEEKLY GRAPH-----------------------------------------------------------//   
 
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
                        [weekly_water_Values,
                        weekly_drink_Values,
                        ],
                    onmax: function(data) {
                        return data[0].value;
                        },
                    type: "line"
                        ,
                    colors:{
                            "물": "#56A4FF",
                            "총 수분 (물+음료)": "#DEDEDE",
                        },  
                   labels:true,
                },
                line: {
                    connectNull: false,
                    zerobased: true
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
                            max:1200,
                            tick:{
                                stepSize: 300
                            },
                            padding:0,
                        
                        },
            },

            legend:{
                show: false,
            },

            grid:{
                y:{
                    lines:[
                        {value: 0, },
                        {value: 300, },
                        {value: 600, },
                        {value: 900, },
                        {value: 1200, },
                    ],
                },
                lines:{front: false}
            },
            svg:{classname:"P1_WG"},
            bindto: "#P1_weeklyGraph",
        });


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


 //------------------------------------------------------------------------------------------------------------------------------//




 //-------------------------------------------------WATER HOURLY GRAPH-----------------------------------------------------------// 
 //-------------------------------------------------WATER HOURLY GRAPH-----------------------------------------------------------// 
    var P1_TimezoneGraph = bb.generate({
        size:{
            //width:width2,
            //height:height2,

        },
        padding:{
            bottom:10,
        },
        data:{
            columns:[["cheating", 150], hourly_water_Values, ],
            type: "bubble",
            colors:{
                "물":"#56A4FF",
                "cheating":"rgb(247, 247, 247)"

            },
        
        },
        bubble: {
            maxR: 15
          },
        grid:{
            x: {
              show: false
                },
            }
            ,
        axis:{
            rotated:true,
                x: {
                    padding:0,
                type: "category",
                categories: parsed_hours_water,
                    
                 },
                y: {
                    show:false,
                    min:0,
                    max:150,
                    padding:0
                },
        },

        legend:{
            show:false,
        },
        svg: {
            classname: 'P1_TG_SVG'
          },


        bindto:"#P1_TimezoneGraph"
    })

        //Centering circles
        const P1_TG_SVG=d3.select(".P1_TG_SVG")
        .selectAll("circle")
        .attr("cx", 35)

        //Drawing Legends
        const legend=d3.select("#TimeLegend")
        const svg=legend
        .append("svg")
        .attr("height", 70)
        .attr("width", 165);

        svg.append("text")
        .attr('x', 10)
        .attr('y', 10)
        .attr('fill', 'black')
        .text('물 섭취량')
        .style('font-size', '175%')

        svg.append("circle") // 원형
        .attr("r", 15)
        .attr("cx", 30)
        .attr("cy", 35)
        .attr("fill", "#56A4FF")
        .style("opacity", 0.5)

        svg.append("text") // text
        .attr('x', 20)
        .attr('y', 60)
        .attr('fill', 'black')
        .text('150ml')
        .style('font-size', '150%')

        svg.append("circle") // 원형
        .attr("r", 10)
        .attr("cx", 80)
        .attr("cy", 35)
        .attr("fill", "#56A4FF")
        .style("opacity", 0.5)
        
        svg.append("text") // text
        .attr('x', 70)
        .attr('y', 60)
        .attr('fill', 'black')
        .text('100ml')
        .style('font-size', '150%')
        
        svg.append("circle") // 원형
        .attr("r", 5)
        .attr("cx", 127)
        .attr("cy", 35)
        .attr("fill", "#56A4FF")
        .style("opacity", 0.5)

        svg.append("text") // text
        .attr('x', 120)
        .attr('y', 60)
        .attr('fill', 'black')
        .text('50ml')
        .style('font-size', '150%')
//------------------------------------------------------------------------------------------------------------------------------//

       
}   

    //Arrange the water intake and pee logs by days and hours
    function ccl_Day_Hour(Data, days, hours){

        let dailyData={};
        let hourlyData={};

        //create date keys(14 days, 24 hours)
        for(let i=0; i<14; i++){
            dailyData[days[i]]=0;
        }

        for(let i=0; i<24; i++){
            hourlyData[hours[i]]=0;
        }

        
        //Count by day and hour
        for(let i=0; i<Data.length; i++){
            let temp=Data[i];

            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/');
            if(temp_day in dailyData){dailyData[temp_day]++;}
            else{console.log("ERROR");}

            //parsing the hours of data and count
            let temp_hour=temp.timestamp.split(" ")[1].split(":")[0];
            if(temp_hour in hourlyData){hourlyData[temp_hour]++;}
            else{console.log("ERROR");}
    
        }
    return [dailyData, hourlyData];
    }

    //for drawing hourly graph, parse the data and find the start, last index of data(not zero) and axis 
    function hourlyData(UserData, ccl_Day_Hour, days, hours, parsed_hours){
        //make a new array that contains only values (for drawing graph)
       let hourly_data=ccl_Day_Hour(UserData, days, hours)[1];
       let hourly_data_Values=[];
       for(var key in hourly_data){
           hourly_data_Values.push(hourly_data[key]/14); //normalized
       }
           //find the start and last hour of water take
       let startIdx=0;
       let lastIdx=23;
   
       for(let i=startIdx; i<lastIdx+1; i++){
           if(hourly_data_Values[i]!=0){startIdx=i;break;}
       }
   
       for(let i=lastIdx; i>startIdx-1; i--){
           if(hourly_data_Values[i]!=0){lastIdx=i; break;}
       }


       hourly_data_Values=hourly_data_Values.slice(startIdx, lastIdx+1);
       parsed_hours=parsed_hours.slice(startIdx, lastIdx+1);

       return [hourly_data_Values, parsed_hours];
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


    
   
console.log(`----------------------------------------------------------`);
console.log(`Debug Text...! function is called`)
console.log(`----------------------------------------------------------`);
    //===============================================================================================================
