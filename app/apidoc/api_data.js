define({ "api": [
  {
    "type": "get",
    "url": "/aviation/api/koreaairports/:airportname",
    "title": "Request korea's airport information by airport name.",
    "name": "GetKoreaAirport",
    "group": "Aviation",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/aviation/api/koreaairports/울산",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airportname",
            "description": "<p>Name of Korea's airport.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Name of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airport_district",
            "description": "<p>District of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude of Korea's airport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "find successfully: \n{ \n    _id: 5f38038cfb1b000004000748, \n    airport_name: '울산', \n    airport_district: '울산광역시 북구 산업로 1103', \n    latitude: 35.593333, \n    longitude: 129.351667 \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KoreaAirportNotFound",
            "description": "<p>Korea airport not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\":\"Korea airport not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/aviation.js",
    "groupTitle": "Aviation"
  },
  {
    "type": "get",
    "url": "/aviation/api/koreaairports",
    "title": "Request Full korea's airports information",
    "name": "GetKoreaAirports",
    "group": "Aviation",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/aviation/api/koreaairports",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airportname",
            "description": "<p>Name of Korea's airport.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Name of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "airport_district",
            "description": "<p>District of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of Korea's airport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude of Korea's airport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "find successfully: \n{ \n    _id: 5f38038cfb1b000004000744, \n    airport_name: '김포', \n    airport_district: '서울특별시 강서구 하늘길 76', \n    latitude: 37.558056, \n    longitude: 126.790556 \n},\n{\n    _id: 5f38038cfb1b000004000745, \n    airport_name: '김해', \n    airport_district: '부산광역시 강서구 공항진입로 108번지', \n    latitude: 35.179444, \n    longitude: 128.938056 \n},\n...\n{ \n    _id: 5f38038cfb1b000004000751, \n    airport_name: '원주', \n    airport_district: '강원도 횡성군 횡성읍 횡성로 38 ', \n    latitude: 37.438056, \n    longitude: 127.960278 \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "KoreaAirportNotFound",
            "description": "<p>Korea airports not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\":\"Korea airport not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/aviation.js",
    "groupTitle": "Aviation"
  },
  {
    "type": "post",
    "url": "/aviation/api/koreaairports/",
    "title": "Create korea's airport information by airport name.",
    "name": "PostKoreaAirport",
    "group": "Aviation",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Name of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_district",
            "description": "<p>District of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude of Korea's airport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    airport_name: '김포', \n    airport_district: '서울특별시 강서구 하늘길 76', \n    latitude: 37.558056, \n    longitude: 126.790556 \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": "<p>apiErrorTitle is not needed.</p>"
          }
        ]
      }
    },
    "filename": "routes/aviation.js",
    "groupTitle": "Aviation"
  },
  {
    "type": "put",
    "url": "/aviation/api/koreaairports/:airportname",
    "title": "Update korea's airport information by airport name.",
    "name": "PutKoreaAirport",
    "group": "Aviation",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airportname",
            "description": "<p>Name of Korea's airport to find data for updating.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Name of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_district",
            "description": "<p>District of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of Korea's airport.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude of Korea's airport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    airport_name: '김포', \n    airport_district: '서울특별시 강서구 하늘길 76', \n    latitude: 37.558056, \n    longitude: 126.790556 \n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/aviation/api/koreaairports/울산",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": "<p>apiErrorTitle is not needed.</p>"
          }
        ]
      }
    },
    "filename": "routes/aviation.js",
    "groupTitle": "Aviation"
  },
  {
    "type": "delete",
    "url": "/aviation/api/koreaairports/:airportname",
    "title": "airportname Delete korea's airport information by airport name.",
    "name": "deleteKoreaAirport",
    "group": "Aviation",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>of Korea's airport to find data for delete.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/aviation/api/koreaairports/울산",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": "<p>apiErrorTitle is not needed.</p>"
          }
        ]
      }
    },
    "filename": "routes/aviation.js",
    "groupTitle": "Aviation"
  }
] });