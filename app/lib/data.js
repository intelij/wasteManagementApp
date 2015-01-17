var data = {
  "categories" : {
    5:{"title":"Computer - Desktop, Laptop, Tablet etc.","type":"Household Hazardous Waste Event"},7:{"title":"Paint Can (Empty)","type":"Trash"},8:{"title":"Gable Top Carton (Milk, Juice, Cream, etc.)","type":"Trash"},10:{"title":"Light Strings (Christmas Lights)","type":"Trash"},16:{"title":"Wine Cork","type":"Trash"},19:{"title":"Couch, Sofa Bed, Chair","type":"Curbside Pick-up"},20:{"title":"Soap, Dental Floss","type":"Trash"},21:{"title":"Empty Container - Antifreeze/Coolant","type":"Trash"},24:{"title":"Vegetable & Fruit Peelings, Pits, Cores, Cobs, Seeds","type":"Trash"},26:{"title":"Floor Lamp, Table Lamp","type":"Curbside Pick-up"},28:{"title":"Beverage Can","type":"Trash"},29:{"title":"Engine Antifreeze, Coolant","type":"Household Hazardous Waste"},31:{"title":"Glass Bottle/Jar (Food)","type":"Trash"},33:{"title":"Prescription Medication Bottle (Empty)","type":"Trash"},34:{"title":"Plastic Spray Bottle (Glass Cleaner, etc.)","type":"Trash"},37:{"title":"Disposable Diaper, Baby Wipe","type":"Trash"},38:{"title":"Pool Chemical, Acid","type":"Household Hazardous Waste"},39:{"title":"Air Conditioner, Dehumidifier","type":"Curbside Pick-up"},47:{"title":"Cellophane, Acetate Film, Mylar Paper","type":"Trash"},49:{"title":"Glue, Adhesive","type":"Household Hazardous Waste"},50:{"title":"Nail Polish Remover (Acetone)","type":"Household Hazardous Waste"},56:{"title":"Carbon Water Filter","type":"Trash"},57:{"title":"Egg Carton - Foam","type":"Trash"},58:{"title":"Meat/Seafood/Cheese Paper","type":"Trash"},59:{"title":"Eyeglasses, Costume Jewelry","type":"Trash"},60:{"title":"Pillow, Cushion","type":"Trash"},63:{"title":"Paper Towel, Napkin, Facial Tissue","type":"Trash"},64:{"title":"Tetra Pak - Juice Box","type":"Trash"},71:{"title":"Gift Box","type":"Trash"},74:{"title":"Hand Soap/Shampoo/Body Wash Bottle","type":"Trash"},76:{"title":"Paper Cookie Bag","type":"Trash"},81:{"title":"Plastic Food Bottle/Jar/Tub","type":"Trash"},83:{"title":"Varnish, Shellac, Finishing Oil","type":"Household Hazardous Waste"},87:{"title":"Refrigerator, Freezer","type":"Curbside Pick-up"},91:{"title":"Dog/Cat Food Can","type":"Trash"},94:{"title":"Battery - Button Type (Hearing Aid, Watch, etc.)","type":"Household Hazardous Waste"},98:{"title":"Computer Wire, Cable, Power Cord","type":"Household Hazardous Waste Event"},
    101:{"title":"Product Containing a Hazardous Warning Label","type":"Household Hazardous Waste"},112:{"title":"Printer, Scanner, Copier, Multi-Function Device","type":"Household Hazardous Waste Event"},114:{"title":"Coffee Cup - Paper","type":"Trash"},115:{"title":"Table, Cabinet, Buffet, etc.","type":"Curbside Pick-up"},119:{"title":"Juice Drink Pouch","type":"Trash"},125:{"title":"Metal Cookware (Pot, Pan, etc.)","type":"Trash"},133:{"title":"Paint - Oil-based (Alkyd, Enamel, etc.)","type":"Household Hazardous Waste"},134:{"title":"Photograph, Postcard, Poster","type":"Trash"},137:{"title":"Smoke & Carbon Monoxide Alarms","type":"Household Hazardous Waste"},138:{"title":"Empty Container - Windshield Washer","type":"Trash"},140:{"title":"Shower Curtain","type":"Trash"},141:{"title":"Waxed Paper, Waxed Cardboard","type":"Trash"},143:{"title":"Computer Modem, External Drive, Zip Drive","type":"Household Hazardous Waste Event"},144:{"title":"Plastic Single Serving Cup (Pudding, Apple Sauce, etc.)","type":"Trash"},147:{"title":"Gift Wrap/Card/Bag/Tag","type":"Trash"},150:{"title":"Magazine, Catalog, Calendar","type":"Trash"},151:{"title":"Fire Extinguisher","type":"Household Hazardous Waste"},161:{"title":"Butter - Foil Wrapper","type":"Trash"},164:{"title":"Shredded Paper","type":"Trash"},165:{"title":"Tetra Pak - Milk Carton","type":"Trash"},171:{"title":"Soiled Paper (Microwave Popcorn Bag, Muffin Cup, etc.)","type":"Trash"},172:{"title":"Wood Stain, Preservative, Water Repellant","type":"Household Hazardous Waste"},174:{"title":"File Folder, Index Card","type":"Trash"},175:{"title":"Battery - Rechargeable","type":"Household Hazardous Waste"},176:{"title":"Cardboard Can - Potato Chips","type":"Trash"},177:{"title":"Plastic Gift/Credit Card","type":"Trash"},178:{"title":"Broken Plate, Bowl, Cup, Mug, etc.","type":"Trash"},179:{"title":"E-book Reader","type":"Household Hazardous Waste Event"},181:{"title":"Egg Carton - Paper","type":"Trash"},183:{"title":"Thermometer, Thermostat, Other Device Containing Mercury","type":"Household Hazardous Waste"},186:{"title":"Florist Foam","type":"Trash"},192:{"title":"Coffee Cup - Foam","type":"Trash"},199:{"title":"Men's, Women's & Children's Clothing","type":"Donate"}
  },
  "sites" : [
    {
      "id" : 1, 
      "name" : "TZed Homes", 
      "types" : {
        1: {"title" : "Blue Bag"},
        2: {"title" : "White Bag"},
        3: {"title" : "Kitchen Waste"},
        4: {"title" : "General Waste"},
        5: {"title" : "Hygiene Waste"},
        6: {"title" : "Syringe Waste"},
        7: {"title" : "Glass Bottles"},
        8: {"title" : "Shredder"}
      },
      "classification" : {
        5 : 1,
        7 : 2
      }
    }, 
    {
      "id" : 2,
      "name" : "Palm Meadows",
      "types" : {
        1: {"title" : "Recycle Bag 1"},
        2: {"title" : "Recycle Bag 2"},
        3: {"title" : "Organic Waste"},
        4: {"title" : "General Waste"},
        5: {"title" : "Medical Waste"},
        6: {"title" : "Syringe Waste"},
        7: {"title" : "Glass Bottles"}
      },
      "classification" : {
        5 : 3,
        7 : 6
      }
    },
    {
      "id" : 3, 
      "name" : "BBMP",
      "types" : {
        1: {"title" : "Dry Waste"},
        2: {"title" : "Wet Waste"}
      },
      "classification" : {
        5 : 1,
        7 : 2
      }
    }
  ]
};

exports.data = data;

