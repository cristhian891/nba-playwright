const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('url');

test.describe('Soft Bundles API test POC', () => {
   
    let payload = {
        "sessionId": "760ebb45-c5cb-27d2-7f4d-30d3989b5a61",
        "channel": "consumer-call-centre",
        "placement": "recommendations",
        "sections": [
          {
            "name": "bundles",
            "limit": 20,
            "filters": [
              {
                "type": "vlocity-category",
                "value": [
                  "VEPC_CAT_NEW_EE_HOME",
                  "VEPC_CAT_STANDALONE_SMART_WIFI_CATALOG"
                ]
              },
              {
                "type": "pricing-tier",
                "value": [
                  "1"
                ]
              },
              {
                "type": "product-type",
                "value": [
                  "bundle"
                ]
              }
            ]
          },
          {
            "name": "broadband-addons",
            "limit": 20,
            "filters": [
              {
                "type": "vlocity-category",
                "value": [
                  "VEPC_CAT_NEW_EE_HOME",
                  "VEPC_CAT_STANDALONE_SMART_WIFI_CATALOG"
                ]
              },
              {
                "type": "pricing-tier",
                "value": [
                  "1"
                ]
              },
              {
                "type": "product-type",
                "value": [
                  "addon"
                ]
              }
            ]
          },
          {
            "name": "standalone-addons",
            "limit": 20,
            "filters": [
              {
                "type": "vlocity-category",
                "value": [
                  "VEPC_CAT_STANDALONE_CATALOG"
                ]
              },
              {
                "type": "pricing-tier",
                "value": [
                  "1"
                ]
              },
              {
                "type": "product-type",
                "value": [
                  "addon"
                ]
              }
            ]
          }
        ],
        "customerContext": {
          "billingAccountNumbers": [
            "0211851207"
          ],
          "individualId": "66cd855c59192d2fef011caf",
          "customerAccountKey": "4003679591",
          "address": {
            "uprn": "110743567896",
            "postCode": "ED3 5HL"
          },
          "services": [
            {
              "type": "broadband",
              "id": "VOL013-C32R1CI"
            }
          ]
        },
        "eligibility": {
          "broadband": {
            "uprn": "110743567896",
            "qualifiedTechnologies": {
              "fttp": {
                "speed": {
                  "normDownloadSpeedUpper": 900,
                  "normUploadSpeedUpper": 110,
                  "minGuaranteeDownloadSpeed": 700,
                  "tvEligibilitySpeed": 900
                },
                "supported": [
                  {
                    "code": "FTTP 40_10M",
                    "speed": {
                      "normDownloadSpeedUpper": 37,
                      "normUploadSpeedUpper": 10,
                      "minGuaranteeDownloadSpeed": 18,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 55_10M",
                    "speed": {
                      "normDownloadSpeedUpper": 51,
                      "normUploadSpeedUpper": 10,
                      "minGuaranteeDownloadSpeed": 25,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 80_20M",
                    "speed": {
                      "normDownloadSpeedUpper": 74,
                      "normUploadSpeedUpper": 20,
                      "minGuaranteeDownloadSpeed": 37,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 160_30M",
                    "speed": {
                      "normDownloadSpeedUpper": 149,
                      "normUploadSpeedUpper": 30,
                      "minGuaranteeDownloadSpeed": 100,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 330_50M",
                    "speed": {
                      "normDownloadSpeedUpper": 308,
                      "normUploadSpeedUpper": 51,
                      "minGuaranteeDownloadSpeed": 150,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 550_75M",
                    "speed": {
                      "normDownloadSpeedUpper": 500,
                      "normUploadSpeedUpper": 73,
                      "minGuaranteeDownloadSpeed": 425,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  },
                  {
                    "code": "FTTP 1000_115M",
                    "speed": {
                      "normDownloadSpeedUpper": 900,
                      "normUploadSpeedUpper": 110,
                      "minGuaranteeDownloadSpeed": 700,
                      "tvEligibilitySpeed": 900
                    },
                    "homeTechExpertEligible": true
                  }
                ],
                "digitalVoiceEligible": "Yes"
              }
            },
            "4GBroadbandAvailable": true
          },
          "voice": {
            "isGnomeEligible": false
          }
        },
        "primaryCadGroup": "ORBIT_CC_LVT",
        "secondaryCadGroups": [
          "ORBIT_TRIAL_1GBPLUS",
          "ORBIT_TRIAL_HOMESEC",
          "ORBIT_TRIAL_FUTURE",
          "ORBIT_TRIAL_PARTNERPAYMODE",
          "ORBIT_TRIAL_VARCON_PH2",
          "ORBIT_TRIAL_BTTVREGRADE",
          "ORBIT_TRIAL_VARCON",
          "ORBIT_TRIAL_PILOT3"
        ]
      };


    const token = 'eyJraWQiOiJld1hTZjNodllVakV0cWwyM0s3S0FDUHMzSFI1UFh6SlBFdVFMajhnZ3lVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzMzFmYTJiYi00ZDNmLTRjNmYtYmJkNS04MTdkZDUwMTZjYTMiLCJjb2duaXRvOmdyb3VwcyI6WyJtYW5hZ2VtZW50X2FjY2VzcyIsIm1hbmFnZW1lbnRfdXNlciJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9TbUZYSXhmT1kiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiJ1MnEwM241dDFlZGQ5anJia2U2ajFrM29rIiwib3JpZ2luX2p0aSI6IjFhZGM4NTFjLWMxOWEtNGJhZi04ZDk5LTUxZDJiNDdiMDhjMiIsImV2ZW50X2lkIjoiY2M0MDIxMzMtNTYwNi00YTAwLThmNzgtY2IxMmYzZTk4ZjUzIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImF1dGhfdGltZSI6MTcyNzQ3MDI2NCwiZXhwIjoxNzI3ODYxNTgxLCJpYXQiOjE3Mjc4NTc5ODEsImp0aSI6ImM2MjllMmE1LWFhYjgtNGQzNC04MjY4LWEzNTE0NjZiMGUxMSIsInVzZXJuYW1lIjoiY3ByZWNpYWRvQHNpbXBsZW1hY2hpbmVzLmNvLnVrIn0.SNMKPLM7nkr1-QHmJB_QqxPzQps1XbpKCZPZR86ZcBzNvZr60mn7eYXmQrRCJDbtlFEJf0Dy7JyXdXGHpHjhy-tkBiK1_0xgydQMcsaPz21ggkPEkN6iBTpy201ysV-Q413J0ZnHhTC5HkTM6Csr5JOKSEVu_offakLC_7bCPV22cz4brn9a5_6QVz_Jr0k98LLuJyX9rxV0fPpPEzyGOuenM1FAyrPwcNFyn3RHtiGTao-UlPWR_aJV1fpsWjS5A51WbkiIaHQQM5F4Ghs1VQTMVGIS00szPPnaQqFTUMHyAVJPKDstLti-U9D6s9tA_1RKPYht7bbgdpYyDBFagA';
    console.log(JSON.stringify(payload));

    test('API Soft Bundles POC Request', async ({request}) => {
        const response = await request.post('https://cnbal-test.consumer-dataengapis.com/api/v3/next-best-actions/products',{ 
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
                
            },  
            data: JSON.stringify(payload)
        });

        expect(response.status()).toBe(200);        
        //console.log(responseBody);

    });

});