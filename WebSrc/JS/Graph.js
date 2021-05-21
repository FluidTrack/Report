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
    let width1=345;
    let days=key_days(start);
    let hours=key_hours();

    let weekly_water=ccl_Day_Hour(UserWaterData, days, hours)[0]; 
    let hourly_water=ccl_Day_Hour(UserWaterData, days, hours)[1];

    let weekly_water_Values=["물"];
    for(var key in weekly_water){
        weekly_water_Values.push(weekly_water[key]*100);
    }


    var chart = bb.generate({
        size: {
            height: height1,
            width: width1
          },
        padding: {
            top: 20,
            right: 20,
            bottom: 0,
            left: 20
            },
        data: {
          columns: [
            weekly_water_Values],
          type: "bar", // for ESM specify as: bar()
            },
         bar: {
          width: {
            ratio: 0.5
                 }
            },
        axis: {
            x: {
              type: "category",
              categories: days,
            },
            y: {
                tick:{
                    stepSize: 200
                }
            },
        },
        bindto: "#P1_DailyGraph"
      });


}
    

    //Arrange the water intake and pee logs by days and hours
    function ccl_Day_Hour(Data, days, hours){

        let weeklyData={};
        let hourlyData={};

        //create date keys(14 days, 24 hours)
        for(let i=0; i<14; i++){
            weeklyData[days[i]]=0;
        }

        for(let i=0; i<24; i++){
            hourlyData[hours[i]]=0;
        }

        
        //Count by day and hour
        for(let i=0; i<Data.length; i++){
            let temp=Data[i];

            let temp_day=temp.timestamp.split(' ')[0].substr(5).replace('-','/');
            if(temp_day in weeklyData){weeklyData[temp_day]++;}
            else{console.log("ERROR");}

            let temp_hour=temp.timestamp.split(" ")[1].split(":")[0];
            if(temp_hour in hourlyData){hourlyData[temp_hour]++;}
            else{console.log("ERROR");}
    
        }
    return [weeklyData, hourlyData];
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
            let temp=i+"";
            hours.push(temp);
        }
        return hours;

    }



console.log(`----------------------------------------------------------`);
console.log(`Debug Text...! function is called`)
console.log(`----------------------------------------------------------`);
    //===============================================================================================================

