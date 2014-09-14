# JSON

	{
	  "array": [
	    1,
	    2,
	    3
	  ],
	  "boolean": true,
	  "null": null,
	  "number": 123,
	  "object": {
	    "a": "b",
	    "c": "d",
	    "e": "f"
	  },
	  "string": "Hello World"
	}

## Acceptable Values

- Array
- Boolean
- Null
- Integers
- Objects
- String

## GeoJSON

- Nothing more than JSON but with globally accepted fields
- No need for application

      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [125.6, 10.1]
          },
          "properties": {
              "name": "Dinagat Islands"
		  }
      }

Visit the GeoJSON website for more information: [http://geojson.org/](http://geojson.org/)

## Example

	{
		"popular": [
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			},
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			}
		],
		"featured": [
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			},
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			}
		]
	}