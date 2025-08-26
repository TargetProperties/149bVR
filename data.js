var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.1419884614232885,
        "pitch": -0.3448912977160514,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.3441342343657166,
          "pitch": -0.11264762071034085,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.9452734635030797,
          "pitch": 0.05899931415521209,
          "rotation": 0,
          "target": "2-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-exterior",
      "name": "Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.09547876994743199,
        "pitch": -0.09694352609792922,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.3201963675302828,
          "pitch": 0.2619915337397849,
          "rotation": 0.7853981633974483,
          "target": "2-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-porch",
      "name": "Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.309152077675444,
        "pitch": 0.08570544325402807,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.930811861909799,
          "pitch": 0.4774980869131831,
          "rotation": 5.497787143782138,
          "target": "0-entrance"
        },
        {
          "yaw": -0.6481316511561559,
          "pitch": 0.349725264678014,
          "rotation": 0,
          "target": "1-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.024528951649683606,
        "pitch": 0.40924239604959034,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3452501193394362,
          "pitch": 0.05778535074893654,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.4302543942134296,
          "pitch": 0.23725209886544363,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.916303774863029,
          "pitch": 0.2655856256680025,
          "rotation": 0,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -2.1687131151489236,
          "pitch": 0.3589853478365441,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.12778235836668905,
        "pitch": 0.5874013994304903,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -3.052941652677955,
          "pitch": 0.4831478442765569,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 2.9930036804251694,
          "pitch": 0.28872837336471413,
          "rotation": 0,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -2.4898088379660805,
          "pitch": 0.14429145679332045,
          "rotation": 0.7853981633974483,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.1439057850109755,
        "pitch": 0.7191181811783203,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.8035988088708486,
          "pitch": 0.35793633039320305,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 2.0214843243874405,
          "pitch": 0.3239462061699214,
          "rotation": 5.497787143782138,
          "target": "8-bathroom-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.219997186520411,
        "pitch": 0.5104379179865859,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.6886659875934118,
          "pitch": 0.6839535728437021,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -3.095026843287462,
          "pitch": 0.5070850235159945,
          "rotation": 11.780972450961727,
          "target": "3-living-room"
        },
        {
          "yaw": -1.6306404048669165,
          "pitch": 0.3398618145417558,
          "rotation": 0,
          "target": "8-bathroom-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.2947445822574135,
        "pitch": 0.8681112693073487,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5543070117930853,
          "pitch": 0.6109088671178213,
          "rotation": 0,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom-landing",
      "name": "Bathroom Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.2715871210088796,
        "pitch": 0.41434897505332735,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.1309121377298785,
          "pitch": 0.8555086551455702,
          "rotation": 0.7853981633974483,
          "target": "9-bathroom"
        },
        {
          "yaw": -0.46939215884537333,
          "pitch": 0.4496936088908967,
          "rotation": 0.7853981633974483,
          "target": "5-bedroom-1"
        },
        {
          "yaw": -1.8709079495576884,
          "pitch": 0.49411887744399685,
          "rotation": 11.780972450961727,
          "target": "6-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.4061437434340824,
        "pitch": 0.5279525114759931,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.5855686668167834,
          "pitch": 0.7720559283917883,
          "rotation": 11.780972450961727,
          "target": "8-bathroom-landing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "149B VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
