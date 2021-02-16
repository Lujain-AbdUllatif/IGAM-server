# IGAM-server 
is a server built to accept requests from the front-end IGAM project, the requests can be made basically from an *Admin* side or an *Agent* side; these are the available *routes* with a brief documentation below: 

1. Sign-in 
2. Admin Sign-up 
3. Admin: get all agents 
4. Admin: adding agent 
5. Admin: adding family 
6. Admin: get all families 
7. Admin: add village 
8. Admin: get all villages 
9. Admin: Assign packages
10. Admin: get all package
11. Admin: Assign financial-ai
12. Admin: get all financial-ai
13. Admin: add package
14. Admin: add donation 
15. Admin: get family’s packages
16. Admin: get family’s financial-aid
17. Admin: get agent’s packages 
18. Admin: get agent’s financial-aid
19. Admin: edit agent 
20. Admin: edit family 
21. Agent: Delivery Approval
22. Agent: get agent’s packages 
23. Agent: get agent’s financial-aid

*NOTE* that the request/ response body are just to demonstrate.

1. **Sign In**  
Route: http://localhost:4000/sign-in  
Request Method: POST  
Request body : should be object like  
{  
    "email":"desert0@gmail.com",  
    "password":"123",  
}  
Response body : should be object like  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Access_token”: “your acces_token”  
}  
<br />
<br />

2. **Admin: Sign Up**  
Route: http://localhost:4000/admin/sign-up  
Request Method: POST  
Request body : should be object like  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Hello Desert",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email":"desert0@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password":"123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0577775632",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"donation_budget": 5,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"available_packages" : 6  
}  
Response body : should be object like  
{  
"name":"Hello Desert",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email":"desert0@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0577775632",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"donation_budget": 5,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"available_packages" : 6  
}  
<br />
<br />

3. **Admin/ Get all agents**  
Route: http://localhost:4000/admin/agents  
Request Method: GET     
> access_token should be included in the headers  
Response body : should be array likewise  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "agent1@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "pass123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0534567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "loc_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "agent2@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "pass123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0534567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "loc_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "agent3@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "pass123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0534567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "loc_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 4,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_4",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "agent4@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "pass123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0534567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "loc_4",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 1  
  }  
]  
<br />
<br />  

4. **Admin: Adding agent**   
Route: http://localhost:4000/admin/agent  
Request Method: POST  
> access_token should be included in the headers  
Request Body: should be a json likewise;  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "test_agent",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "test_agent@gmail.com",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0512345678",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "123",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitude",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": "1"  
}  
Response body : should be array likewise  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "test_agent",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "test_agent1232345@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0512345678",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "123",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitude",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 1  
}  
<br />
<br />
5. **Admin: Add Family**  
Route: http://localhost:4000/family  
Request Method: POST  
> access_token should be included in the headers  
Request Body: should be a json likewise;  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"Mario marzok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone":"0553610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members":"17",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id":1  
}  
Response body : should be array likewise  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Mario marzok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "U98b5E7srr",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0553610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 17,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
}  
<br />
<br />
6. **Admin: Get all families**  
Route: http://localhost:4000/family  
Request Method: GET  
> access_token should be included in the headers  
Response body : should be array likewise  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "family_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "1qaz%$rfv",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "1234567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 8,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "family_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "2qaz%$rfv",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "1234567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 9,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "family_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "3qaz%$rfv",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "1234567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 4,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "family_4",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "4qaz%$rfv",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "1234567891",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 13,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Asad Said",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "2PlG7sRTHH",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0543617889",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 14,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Said Masaod",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "msHGOv2vnh",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0543617809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 8,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 15,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Marzok awwad",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "hRC4FeveE7",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0543610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 6,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 16,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Marzok awwad",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "qz1ORmaoad",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0543610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 6,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 17,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Mario marzok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "U98b5E7srr",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0553610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 17,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"village_id": 1  
  }  
]  
<br />
<br />
7. **Admin: Add Village**  
Route: http://localhost:4000/village  
Request Method: POST  
> access_token should be included in the headers  
Request Body: should be a json likewise;  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"negev",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location":"longitude altitude"  
}  
Response body : should be array likewise  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "negev",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitude"  
}  
<br />
<br />
8. **Admin: get all villages**  
Route: http://localhost:4000/village  
Request Method: GET  
> access_token should be included in the headers  
Response body : should be array likewise  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 4,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "negev",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitude",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"admin_id": 5  
  }  
]  
<br />
<br />
9. **Assign administrator’s packages**  
Route: http://localhost:4000/help/packge/assign
Request Method: POST
> access_token should be included in the headers
Request Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 3,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"families_id": [1,2,3,4],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 4
}
Response Body: should be array like,
[
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 22
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 21
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 23
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 24
  }
]
<br />
<br />
10. **Get all administrator’s packages**  
Route: http://localhost:4000/help/packges
Request Method: GET 
> access_token should be included in the headers
Response body : should be array likewise
[
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 16,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 2
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 15,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 2
  }
]
<br />
<br />
11. **Assign administrator’s financial aid**  
Route: http://localhost:4000/help/financial-aid/assign
Request Method: POST 
> access_token should be included in the headers
Request Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 300,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"families_id": [1,2,3,4],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 4
}
Response Body: should be array like,
[
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 27
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 25
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 28
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 26
  }
]
<br />
<br />
12. **Get all administrator’s financial aids** 
Route: http://localhost:4000/help/financial-aids
Request Method: GET 
> access_token should be included in the headers
Response body : should be array likewise
[
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 27,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_1",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 28,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 26,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300
  },
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 25,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_name": "agent_4",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300
  }
]
<br />
<br />
13. **Admin: Add packages**   
Route: http://localhost:4000/admin/add-packages
Request Method: POST
> access_token should be included in the headers
Request Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"packages": 10
}
Response Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"available_packages": 36
}
<br />
<br />
14. **Admin: Add donation**  
Route: http://localhost:4000/admin/add-donation  
Request Method: POST  
> access_token should be included in the headers
Request Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"donation": 10
}
Response Body: should be object like,
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"donation_budget": 36
}
<br />
<br />
15. **Admin: get family’s packages**  
Route: http://localhost:4000/family/package
Request Method: POST
Headers should include access_token
Request body : should be object like
{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id" : 6
}
*Response body : should be object like
[
  {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 6,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "package",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 2,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "assigned",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 2,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_2"
  }
]
<br />
<br />
16. **Admin: get family’s financial-aid**  
Route: http://localhost:4000/family/financial-aid  
Request Method: POST  
Headers should include access_token  
Request body : should be object like  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 1  
}  
Response body : should be object like  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "money",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"amount": 100,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "delivered",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "agent_1"  
  }  
]  
<br />
<br />
17. **Admin: get agent’s packages**   
Route: http://localhost:4000/agent/packages  
Request Method: GET  
> access_token should be included in the headers  
Request Body: should be object like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 1  
}  
Response Body: should be array like,  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "delivered",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "delivered",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  }  
]  
<br />
<br />
18. **Admin: get agent’s financial-aid**   
Route: http://localhost:4000/agent/financial_aids  
Request Method: GET  
> access_token should be included in the headers  
Request Body: should be object like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id": 4  
}  
Response Body: should be array like,  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 27,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 28,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_4",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 26,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 4,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 25,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  }  
]  
<br />
<br />
19. **Admin: edit family**  
Route: http://localhost:4000/family  
Request Method: PUT  
> access_token should be included in the headers  
Request Body: should be object like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id":1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Mahmod masaed",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0597610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 13,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code":"1234rgh"    
}  
Response Body: should be array like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Mahmod masaed",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0597610809",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"members": 13,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": "1234rgh",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1  
}  
<br />
<br />
20. **Admin: edit agent**  
Route: http://localhost:4000/admin/agent  
Request Method: PUT  
> access_token should be included in the headers  
Request Body: should be object like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"agent_id":1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "lujian",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "lujia@gmail.com",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0572345678",   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitudeq"  
}  
Response Body: should be array like,  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "lujian",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "lujia@gmail.com",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "0572345678",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location": "longitude altitudeq"  
}  
<br />
<br />
21. **Agent: get agent’s packages**   
Route: http://localhost:4000/agent/packages  
Request Method: GET  
> access_token should be included in the headers  
Request Body: NONE  
Response Body: should be array like,  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "delivered",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "delivered",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "package"  
  }  
]  
<br />
<br />
22. **Agent: get agent’s financial-aid**  
Route: http://localhost:4000/agent/financial_aids  
Request Method: GET  
> access_token should be included in the headers  
Request Body: NONE  
Response Body: should be array like,  
[  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_1",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 27,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 1,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 28,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 3,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_4",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 26,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 4,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  },  
  {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_name": "family_2",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_id": 25,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_status": "assigned",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_amount": 300,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"family_id": 2,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"help_type": "money"  
  }  
]  

