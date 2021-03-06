"use strict";


let scores = 
`1399, 830 , 706 , 1241, 1440, 1539, 1279, 1168, 1402, 1591 
1113, 1401, 403 , 513 , 1196, 813 , 1105, 659 , 1533, 1134 
1275, 1363, 764 , 1225, 1080, 1351, 709 , 875 , 1549, 1441 
712 , 1189, 447 , 1584, 719 , 1069, 1316, 1083, 1406, 1133 
1260, 1555, 1509, 1490, 1302, 1442, 1040, 1593, 662 , 1481 
903 , 1287, 1078, 1098, 1573, 812 , 1143, 1154, 965 , 864  
853 , 702 , 1029, 761 , 932 , 1117, 1273, 1551, 1207, 1456 
936 , 1101, 1202, 491 , 816 , 784 , 1125, 587 , 715 , 1233 
446 , 1313, 1449, 1419, 832 , 1113, 1389, 708 , 894 , 966  
1018, 1455, 1569, 789 , 991 , 953 , 764 , 1269, 1305, 1281 
683 , 714 , 893 , 1029, 1002, 1099, 1387, 1475, 1168, 703  
832 , 440 , 1000, 1453, 1124, 1501, 708 , 750 , 875 , 1506 
1544, 1013, 542 , 635 , 1135, 779 , 1561, 735 , 952 , 1529 
1472, 1222, 722 , 1088, 578 , 1235, 869 , 1579, 1170, 890  
1393, 1287, 1420, 1481, 1282, 1161, 1265, 938 , 956 , 1051 
1090, 1163, 753 , 737 , 799 , 962 , 1162, 1058, 1321, 1238
416 , 782 , 765 , 1352, 910 , 1044, 1103, 1424, 792 , 835  
1136, 410 , 1257, 942 , 882 , 1459, 1345, 1534, 437 , 1509
1285, 1404, 493 , 1225, 767 , 1484, 516 , 1069, 938 , 874 
599 , 1461, 1159, 1531, 490 , 1467, 725 , 746 , 602 , 478 
1371, 892 , 1258, 973 , 504 , 787 , 1572, 842 , 574 , 1165 
455 , 901 , 1450, 959 , 1105, 1268, 1087, 658 , 1371, 968  
1201, 1227, 500 , 1139, 983 , 814 , 717 , 936 , 991 , 538  
628 , 574 , 1053, 522 , 476 , 1456, 1591, 767 , 960 , 1060 
573 , 1100, 1370, 561 , 1057, 1308, 465 , 796 , 1352, 1178 
1525, 1187, 1268, 628 , 454 , 414 , 969 , 1593, 1320, 1077 
1527, 448 , 847 , 637 , 1185, 1093, 1208, 1066, 1091, 1549 
1180, 958 , 1461, 503 , 1513, 1479, 1131, 435 , 1149, 1510 
936 , 1388, 1533, 433 , 974 , 965 , 950 , 677 , 871 , 1253 
1216, 750 , 1159, 1058, 1187, 1153, 1434, 844 , 494 , 1180 
1005, 651 , 946 , 939 , 553 , 772 , 1100, 1508, 735 , 1289 
1165, 1495, 949 , 656 , 1570, 1529, 1419, 1202, 1110, 1081 
788 , 729 , 1091, 831 , 1026, 1308, 621 , 1215, 706 , 845  
1524, 1093, 1511, 895 , 1475, 990 , 573 , 1120, 1324, 1258 
1286, 604 , 1081, 1510, 707 , 512 , 1527, 1311, 468 , 1517 
1448, 1388, 403 , 1396, 1043, 837 , 413 , 794 , 1437, 1245 
423 , 602 , 1444, 787 , 1389, 1528, 1310, 1423, 1281, 944  
1518, 1301, 720 , 1277, 595 , 765 , 806 , 834 , 523 , 809  
532 , 1135, 974 , 1564, 1358, 1041, 1138, 1016, 1389, 625  
1457, 429 , 1032, 503 , 806 , 970 , 1484, 756 , 1197, 1588 
945 , 440 , 505 , 1069, 801 , 1035, 1335, 1157, 1085, 734  
1161, 1425, 1418, 532 , 957 , 1017, 1390, 1262, 650 , 705  
1283, 1146, 1118, 1189, 418 , 974 , 999 , 680 , 1192, 1403 
426 , 981 , 1103, 704 , 486 , 1369, 1582, 579 , 1116, 1371 
1469, 873 , 606 , 867 , 856 , 1581, 1165, 515 , 1335, 1018 
1214, 744 , 415 , 595 , 1366, 1208, 1573, 1570, 792 , 460  
615 , 1388, 740 , 405 , 1568, 1301, 417 , 748 , 608 , 1473 
1565, 403 , 767 , 1531, 702 , 671 , 680 , 1156, 920 , 451  
1598, 1247, 634 , 1556, 1449, 1447, 1365, 1573, 1227, 1205 
979 , 1031, 597 , 1154, 931 , 1048, 564 , 1506, 407 , 1105`

scores = scores.split("\n");

//problem 1
//You turn to your boss and ask what you should do, nothing like this has ever happened to you before. Your boss tells you that they don???t know either and are going to ask the president of SATs and ACTs. In the meantime they ask you to fix the table for use in the code. You need to:
//1. Remove all of the spaces
//2. Create a 2D array that is separated into schools for rows and scores for columns. 
//3. Use console.table to output your data (this is what I want in the answer)
for(let i in scores){
    scores[i] = scores[i].split(',')
}
//console.table(scores)


//????*????????????????*?????????????????*??????????????????*??????????? ??????.????*????????????????*?????????????????*??????????????????*??????????? .


//problem 2
//Your boss comes back to you with an answer. The president said that the best way to handle this was to find the difference between the lowest and highest scores of every school. 
//1. Add those differences together
//2. Submit that, an easier way to check if you have the right answer.
//Code that might help:
//array.sort()  -  array.push()  -  array.length  -  Math.min()  -  Math.max()

    //let sortedRow = scores.sort(sortNumbers);
    let sortedRow = [];
    let rows = [];
    for(let i = 0; i < 50 ; i++){
        //function returns a subtracted by b, which would sort it from least to most
        sortedRow = scores[i].sort((a, b)=> a - b)
                    //this entire function makes it so .sort sorts numbers not string
                    //ends function execution and returns the diference of a and b

        //this makes a new array, and each item in the array becomes a number
        rows = sortedRow.map(i=>Number(i))

        //adding the console.table here made it so the terminal outputs ALL the organized arrays (which shows this works 100%)
        //console.table(rows)

        //this subtracts the largest score w/ the smallest one
        let least = Math.min(...sortedRow);
        let most = Math.max(...sortedRow);
        
        let answer = most - least;
        //console.log(answer)
    }


    //????*????????????????*?????????????????*??????????????????*??????????? ??????.????*????????????????*?????????????????*??????????????????*??????????? .



//problem 3
//That???s not going to do the trick, as you are working you realize that the boss likely meant to find the average at each school. Find the average of every school and add those values together, round your final answer to the nearest 2 decimal places (10.25).
//Code that might help:
//number.toFixed()

let sortedRow = [];
let rows = [];
for(let i = 0; i < 50 ; i++){
    //function returns a subtracted by b, which would sort it from least to most
    sortedRow = scores[i].sort((a, b)=> a - b)
                //this entire function makes it so .sort sorts numbers not string
    //this makes a new array, and each item in the array becomes a number
    rows = sortedRow.map(i=>Number(i))

    //WET but it works
    let one = rows[0];
    let two = rows[1];
    let three = rows[2];
    let four = rows[3];
    let five = rows[4];
    let six = rows[5]; 
    let seven = rows[6]; 
    let eight = rows[7]; 
    let nine = rows[8]; 
    let ten = rows[9];

    let sum = one + two + three + four + five + six + seven + eight + nine + ten;

    let average = Math.ceil(sum/10)

    console.log(average)
}