export const datasetCreate = (catalogEntryUrl: string) => `
{
  "dataProviderEmail": {
    "data": "john@nro.gov",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "technicalPocEmail": {
    "data": "john@nro.gov",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataCustodianEmail": {
    "data": "john@nro.gov",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataStewardEmail": {
    "data": "john@nro.gov",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataStewardForAccess": {
    "data": "John Paul Doe",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataStewardOrganization": "CIA",
  "dataStewardOffice": "GED",
  "dataCustodian": {
    "data": "John Paul Doe",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataCustodianOrganization": "CIA",
  "dataCustodianOffice": "GED",
  "technicalPoc": {
    "data": "John Paul Doe",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "technicalPocOrganization": "CIA",
  "technicalPocOffice": "GED",
  "dataProvider": {
    "data": "John Paul Doe",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "dataProviderOrganization": "CIA",
  "dataProviderOffice": "GED",
  "entryClassification": {
    "data": "Top Secret",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "entryClassificationGuide": "NRO",
  "entryStatus": "final",
  "entryDiscoverability": "public",
  "title": {
    "data": "Aircraft Performance",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "description": {
    "data": "A aircraft performance is crucial to evaluate the                  availability of a mission, also to compare aircrafts                  and decide which one is more suited for a given mission.                  This dataset contains 861 airplanes and 102 helicopters and their characteristics, such as Max Speed",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "conformsTo": [
    "https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog",
    "http://xmlns.com/foaf/spec/#term_Agent"
  ],
  "keywords": [
    {
      "data": [
        "ASDF",
        "Stuff",
        "Things"
      ],
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    },
    {
      "data": [
        "more",
        "cosmic"
      ],
      "ism": {
        "classification": "S",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  ],
  "homepage": "https://dni.ic.gov/data-catalog.aspx",
  "projectName": [
    {
      "data": "Project X",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    },
    {
      "data": "Project Y",
      "ism": {
        "classification": "S",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  ],
  "spatialResolution": 0,
  "organization": "CIA",
  "office": "GED",
  "datasetClassification": {
    "data": "Top Secret",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "datasetClassificationGuide": "NRO",
  "countriesTargets": [
    "AFG"
  ],
  "dataSubjectsCategories": [
    {
      "data": "string",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  ],
  "dataStructures": [
    {
      "data": "string",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  ],
  "providerDeliveryFrequency": {
    "frequency": 1,
    "timeUnit": "seconds"
  },
  "apiAccessPoints": [
    {
      "url": "https://sample-prod.p8s-test.rdt.nro.ic.gov/sample-avro-metadata/swagger-ul.html",
      "network": "IMIS"
    }
  ],
  "userInterfaceAccessPoints": [
    {
      "url": "https://sample-prod.p8s-test.rdt.nro.ic.gov/sample-avro-metadata/swagger-ul.html",
      "network": "IMIS"
    }
  ],
  "pointToPointProtocols": [
    {
      "url": "https://sample-prod.p8s-test.rdt.nro.ic.gov/sample-avro-metadata/swagger-ul.html",
      "network": "IMIS"
    }
  ],
  "downloadAccessPoint": [
    {
      "url": "https://sample-prod.p8s-test.rdt.nro.ic.gov/sample-avro-metadata/swagger-ul.html",
      "network": "IMIS"
    }
  ],
  "datasetDocumentation": {
    "data": "Data wrangling is recommend                 for data analysis, since there's a lot of                 missing values, different data formats and units for the same features.",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "generalComments": {
    "data": "The U.S. Department of Transportation's (DOT)                 Bureau of Transportation Statistics tracks the on-time                 performance of domestic flights operated by large air carriers. ",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "publishEntry": true,
  "earliestDateOfContent": "2023-03-16T17:56:06.547Z",
  "brokerTopicName": [
    {
      "data": [
        "nro.dataprovider.blazer, nro.dataprovider.blazer1"
      ],
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    },
    {
      "data": [
        "nro.dataprovider.blazer-secret"
      ],
      "ism": {
        "classification": "S",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  ],
  "commercial": {
    "commercial": false,
    "license": []
  },
  "entitlements": {
    "data": "string",
    "ism": {
      "classification": "U",
      "ownerProducer": [
        "USA"
      ]
    }
  },
  "entitlementsStatus": "pending",
  "catalogEntryUrl": "${catalogEntryUrl}",
  "resourceType": "dataset",
  "distributions": [
    {
      "title": {
        "data": "Aircraft Performance",
        "ism": {
          "classification": "U",
          "ownerProducer": [
            "USA"
          ]
        }
      },
      "description": {
        "data": "A aircraft performance is crucial to evaluate the                  availability of a mission, also to compare aircrafts                  and decide which one is more suited for a given mission.                  This dataset contains 861 airplanes and 102 helicopters and their characteristics, such as Max Speed",
        "ism": {
          "classification": "U",
          "ownerProducer": [
            "USA"
          ]
        }
      },
      "accessUrl": "https://dni.ic.gov/data/download.json",
      "downloadUrl": "https://dni.ic.gov/data/download.zip",
      "mediaType": "application/x-archive",
      "compressionFormat": "application/x-7z-compressed",
      "packagingFormat": "application/x-7z-compressed"
    }
  ],
  "dataService": {
    "title": {
      "data": "Aircraft Performance",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    },
    "description": {
      "data": "A aircraft performance is crucial to evaluate the                  availability of a mission, also to compare aircrafts                  and decide which one is more suited for a given mission.                  This dataset contains 861 airplanes and 102 helicopters and their characteristics, such as Max Speed",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    },
    "endpointUrl": "https://dni.ic.gov/data/api/",
    "endpointDescription": {
      "data": "Details can be found at https://dni.ic.gov/data/api/docs",
      "ism": {
        "classification": "U",
        "ownerProducer": [
          "USA"
        ]
      }
    }
  },
  "providerIdentifier": "string",
  "releaseDate": "2023-03-16T17:56:06.547Z",
  "deprecate": false
}
`;
