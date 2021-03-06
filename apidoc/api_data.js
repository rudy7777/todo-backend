define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/deleteTask",
    "title": "delete task by task id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of user as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"task deleted successfully\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                           taskId:\"String\",\n                           title:\"String\",\n                           description:\"String\",\n                           subtask:\"String\",\n                           friends:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed to delete task\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1Deletetask"
  },
  {
    "type": "post",
    "url": "/api/v1/undoTaskHistory",
    "title": "undo task history",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of user as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"friend added successfully\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       friendId:\"String\",\n                       email:\"String\",\n                       invitedBy:\"String\",\n                       invitedOn:date\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed undo task history\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1Undotaskhistory"
  },
  {
    "type": "put",
    "url": "/api/v1/update",
    "title": "Update task by taskId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>id of to do list as a query parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtask",
            "description": "<p>subtask of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of to do list as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          [ \n              data: {\n              createdBy: \"String\",\n               createdOn: date,\n               description: \"String\",\n               friends: \"String\",\n               status: \"String\",\n               subTask: \"String\",\n               taskId: \"String\",\n               title: \"String\"\n               }\n        ],\n         error: false\n        message: \"task updated successfully\"\n       status: 200\n               }\n          \n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to update to do list\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1Update"
  },
  {
    "type": "put",
    "url": "/api/v1/updatePass",
    "title": "Update password by email id",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of user as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of user as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          [ \n              data: {\n                userId:\"String\",\n                       firstName:\"String\",\n                       lastName:\"String\",\n                       password:\"String\",\n                       email:\"String\",\n                       countryCode:\"String\",\n                       mobile:\"String\",\n                       createdOn:\"date\",\n                       createdBy:\"String\"\n               }\n        ],\n         error: false\n        message: \"password updated successfully\"\n       status: 200\n               }\n          \n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to update password\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1Updatepass"
  },
  {
    "type": "put",
    "url": "/api/v1/updateProfile",
    "title": "Update profile by id",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of user as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          [ \n              data: {\n                       userId:\"String\",\n                       firstName:\"String\",\n                       lastName:\"String\",\n                       password:\"String\",\n                       email:\"String\",\n                       countryCode:\"String\",\n                       mobile:\"String\",\n                       createdOn:\"date\",\n                       createdBy:\"String\"\n               }\n        ],\n         error: false\n        message: \"user profile updated successfully\"\n       status: 200\n               }\n          \n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to update profile\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1Updateprofile"
  },
  {
    "type": "post",
    "url": "/api/v1/userDetailsByEmail",
    "title": "get user details by email",
    "version": "0.0.1",
    "group": "fetch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a URI parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"user details fetch successfully\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           userId:\"String\",\n                           firstName:\"String\",\n                           lastName:\"String\",\n                           password:\"String\",\n                           email:\"String\",\n                           countryCode:\"String\",\n                           mobile:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to fetch user details\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "fetch",
    "name": "PostApiV1Userdetailsbyemail"
  },
  {
    "type": "post",
    "url": "/api/v1/userDetailsById",
    "title": "get user details by id",
    "version": "0.0.1",
    "group": "fetch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user passed as a URI parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"user details fetch successfully\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           userId:\"String\",\n                           firstName:\"String\",\n                           lastName:\"String\",\n                           password:\"String\",\n                           email:\"String\",\n                           countryCode:\"String\",\n                           mobile:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to fetch user details\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "fetch",
    "name": "PostApiV1Userdetailsbyid"
  },
  {
    "type": "post",
    "url": "/api/v1/addFriend",
    "title": "add friend",
    "version": "0.0.1",
    "group": "insert",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of user as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of user as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "invitedBy",
            "description": "<p>invitedBy user as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"friend added successfully\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       \"friendId\":\"String\",\n                       email:\"String\",\n                       invitedBy:\"String\",\n                       invitedOn:date\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Add friend\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "insert",
    "name": "PostApiV1Addfriend"
  },
  {
    "type": "post",
    "url": "/api/v1/addTodo",
    "title": "add to do list",
    "version": "0.0.1",
    "group": "insert",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtask",
            "description": "<p>subtask of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of to do list as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of to do list as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"to do list added successfully\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       \"taskId\":\"String\",\n                       title:\"String\",\n                       description:\"String\",\n                       subtask:\"String\",\n                       friends:\"String\",\n                       createdOn:\"date\",\n                       createdBy:\"String\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Add to do list\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "insert",
    "name": "PostApiV1Addtodo"
  },
  {
    "type": "post",
    "url": "/api/v1/forgot",
    "title": "forgot link",
    "version": "0.0.1",
    "group": "link_sent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of to do list as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"forgot link sent successfully\",\n       \"status\": 200,\n       \"data\": [\n                  {\n                           userId:\"String\",\n                           firstName:\"String\",\n                           lastName:\"String\",\n                           password:\"String\",\n                           email:\"String\",\n                           countryCode:\"String\",\n                           mobile:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To send link\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "link_sent",
    "name": "PostApiV1Forgot"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "login user",
    "version": "0.0.1",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"login successfully\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       userId:\"String\",\n                       firstName:\"String\",\n                       lastName:\"String\",\n                       password:\"String\",\n                       email:\"String\",\n                       countryCode:\"String\",\n                       mobile:\"String\",\n                       createdOn:\"date\",\n                       createdBy:\"String\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find User Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "login",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "get",
    "url": "/api/v1/friendCount",
    "title": "Get friendcount",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched friend count successfully \",\n           \"status\": 200,\n           \"data\": 4\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Friendcount"
  },
  {
    "type": "get",
    "url": "/api/v1/friendList",
    "title": "Get friend list",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched friend list successfully \",\n           \"status\": 200,\n           \"data\": [\n                       {\n                       friendId:\"String\",\n                       email:\"String\",\n                       invitedBy:\"String\",\n                       invitedOn:date\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Friendlist"
  },
  {
    "type": "get",
    "url": "/api/v1/getNotification",
    "title": "Get task history",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched task history successfully \",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           taskHistoryId:\"String\",\n                           action:\"String\",\n                           updatedOn:\"date\",\n                           updatedBy:\"String\",\n                           taskId:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Getnotification"
  },
  {
    "type": "get",
    "url": "/api/v1/getTask",
    "title": "Get task by id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched task by id successfully \",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           \"taskId\":\"String\",\n                           title:\"String\",\n                           description:\"String\",\n                           subtask:\"String\",\n                           friends:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Gettask"
  },
  {
    "type": "get",
    "url": "/api/v1/getTaskHistory",
    "title": "Get task history",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>taskId of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched task history successfully \",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           taskHistoryId:\"String\",\n                           action:\"String\",\n                           updatedOn:\"date\",\n                           updatedBy:\"String\",\n                           taskId:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Gettaskhistory"
  },
  {
    "type": "get",
    "url": "/api/v1/getTodo",
    "title": "Get to do list",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of the user passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friends",
            "description": "<p>friends id passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched to do list successfully \",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           \"taskId\":\"String\",\n                           title:\"String\",\n                           description:\"String\",\n                           subtask:\"String\",\n                           friends:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Gettodo"
  },
  {
    "type": "get",
    "url": "/api/v1/taskCount",
    "title": "Get taskcount",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of the task passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"fetched task count successfully \",\n           \"status\": 200,\n           \"data\": 4\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"error occurred\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1Taskcount"
  },
  {
    "type": "post",
    "url": "/api/v1/signup",
    "title": "User Sign Up",
    "version": "0.0.1",
    "group": "sign_up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"sign up successfully\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           userId:\"String\",\n                           firstName:\"String\",\n                           lastName:\"String\",\n                           password:\"String\",\n                           email:\"String\",\n                           countryCode:\"String\",\n                           mobile:\"String\",\n                           createdOn:\"date\",\n                           createdBy:\"String\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed to create new User\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "sign_up",
    "name": "PostApiV1Signup"
  }
] });
