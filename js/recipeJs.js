/**
 * Created by wmd000 on 15/09/2016.
 */
$(function () {
    var a = window.name;
    search(a);
    $('#btn1').click(function () {
        a = $('#i1').val();
        //alert(a);
        search(a);
    });
    $('#shareBtn').click(function () {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://developers.facebook.com/docs/',
        }, function (response) { });
    });
    var appInsights = window.appInsights || function (config) {
        function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i); }); }; }
        var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f;
        s.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js";
        u.getElementsByTagName(o)[0].parentNode.appendChild(s);
        try {
            t.cookie = u.cookie;
        }
        catch (h) { }
        for (t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; i.length;)
            r("track" + i.pop());
        return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s; }), t;
    }({
        instrumentationKey: "99ed746e-5695-4fd3-afe6-2ab9f7a225b0"
    });
    window.appInsights = appInsights;
    appInsights.trackPageView();
});
function search(a) {
    if (a == "") {
        data = {
            "q": "sugar",
            "from": 0,
            "to": 10,
            "params": {
                "sane": [],
                "q": [
                    "sugar"
                ]
            },
            "more": true,
            "count": 1000,
            "hits": [
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a46ae0ad4f8320fa6285b25fc7b36432",
                        "label": "Bread Pudding with Apple and Brown Sugared Bacon",
                        "image": "https://www.edamam.com/web-img/1ae/1ae111af3737d42e9d743445f5605373.JPG",
                        "source": "Food52",
                        "sourceIcon": "http://www.food52.com/favicon.ico",
                        "url": "http://www.food52.com/recipes/15127_bread_pudding_with_apple_and_brown_sugared_bacon",
                        "shareAs": "http://www.edamam.com/recipe/bread-pudding-with-apple-and-brown-sugared-bacon-a46ae0ad4f8320fa6285b25fc7b36432/sugar",
                        "yield": 4,
                        "dietLabels": [
                            "Balanced",
                            "High-Fiber"
                        ],
                        "healthLabels": [
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "1/2 cup light brown sugar",
                            "6 slices bacon",
                            "5 cups cubed italian or french bread (stale works well here)",
                            "1 medium apple, peeled, cored and cut into a fine dice",
                            "2 tablespoons butter",
                            "4 eggs, beaten",
                            "1 cup whole milk",
                            "1 cup half and half",
                            "1/4 cup granulated sugar",
                            "1 teaspoon vanilla extract",
                            "8 to 10 gratings of nutmeg",
                            "1/4 teaspoon salt",
                            "The brown sugared bacon"
                        ],
                        "ingredients": [
                            {
                                "text": "1/2 cup light brown sugar",
                                "quantity": 0.5,
                                "measure": "cup",
                                "food": "light brown sugar",
                                "weight": 110
                            },
                            {
                                "text": "6 slices bacon",
                                "quantity": 6,
                                "measure": "slice",
                                "food": "bacon",
                                "weight": 174
                            },
                            {
                                "text": "5 cups cubed italian or french bread (stale works well here)",
                                "quantity": 5,
                                "measure": "cup",
                                "food": "french bread",
                                "weight": 950
                            },
                            {
                                "text": "1 medium apple, peeled, cored and cut into a fine dice",
                                "quantity": 1,
                                "measure": "medium",
                                "food": "apple",
                                "weight": 182
                            },
                            {
                                "text": "2 tablespoons butter",
                                "quantity": 2,
                                "measure": "tbsp",
                                "food": "butter",
                                "weight": 28.4
                            },
                            {
                                "text": "4 eggs, beaten",
                                "quantity": 4,
                                "measure": "large",
                                "food": "eggs",
                                "weight": 200
                            },
                            {
                                "text": "1 cup whole milk",
                                "quantity": 1,
                                "measure": "cup",
                                "food": "whole milk",
                                "weight": 244
                            },
                            {
                                "text": "1 cup half and half",
                                "quantity": 1,
                                "measure": "cup",
                                "food": "half and half",
                                "weight": 242
                            },
                            {
                                "text": "1/4 cup granulated sugar",
                                "quantity": 0.25,
                                "measure": "cup",
                                "food": "granulated sugar",
                                "weight": 50
                            },
                            {
                                "text": "1 teaspoon vanilla extract",
                                "quantity": 1,
                                "measure": "tsp",
                                "food": "vanilla extract",
                                "weight": 4.2
                            },
                            {
                                "text": "8 to 10 gratings of nutmeg",
                                "quantity": 9,
                                "measure": "nutmeg",
                                "food": "nutmeg",
                                "weight": 18
                            },
                            {
                                "text": "1/4 teaspoon salt",
                                "quantity": 0.25,
                                "measure": "tsp",
                                "food": "salt",
                                "weight": 1.5
                            },
                            {
                                "text": "The brown sugared bacon",
                                "quantity": 0,
                                "measure": "bacon",
                                "food": "bacon",
                                "weight": 0.001
                            }
                        ],
                        "calories": 5194.22858,
                        "totalWeight": 2204.101,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 5194.22858,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 203.88301040000002,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 82.5764099,
                                "unit": "g"
                            },
                            "FATRN": {
                                "label": "Trans",
                                "quantity": 0.98868,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 77.3630404,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 22.589376199999997,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 694.0501466,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 38.512,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 197.60254,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 143.753636,
                                "unit": "g"
                            },
                            "CHOLE": {
                                "label": "Cholesterol",
                                "quantity": 1037.32068,
                                "unit": "mg"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 7374.940329999999,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 1660.23806,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 336.50712,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 2775.7940799999997,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 31.9100748,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 15.8322917,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 2025.80988,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 886.7361099999999,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 11.09,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 5.7586428000000005,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 4.7333011,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 49.0224382,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 1.2834940999999995,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 1211.53202,
                                "unit": "µg"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 4.9254869,
                                "unit": "µg"
                            },
                            "VITD": {
                                "label": "Vitamin D",
                                "quantity": 10.866016,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 7.3756827000000005,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 27.570000000000004,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 259.711429,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 313.6661698461539,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 412.8820495,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 231.35004886666667,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 154.048,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 287.507272,
                                "unit": "%"
                            },
                            "CHOLE": {
                                "label": "Cholesterol",
                                "quantity": 345.77356,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 307.2891804166666,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 166.02380599999998,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 84.12678,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 79.30840228571427,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 177.27819333333335,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 105.54861133333334,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 289.40141142857146,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 98.52623444444443,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 18.483333333333334,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 383.90952,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 278.42947647058827,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 245.11219100000002,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 64.17470499999997,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 302.883005,
                                "unit": "%"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 82.09144833333333,
                                "unit": "%"
                            },
                            "VITD": {
                                "label": "Vitamin D",
                                "quantity": 2.716504,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 36.87841350000001,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 34.462500000000006,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 203.88301040000002,
                                "hasRDI": true,
                                "daily": 313.6661698461539,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 82.5764099,
                                        "hasRDI": true,
                                        "daily": 412.8820495,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0.98868,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 77.3630404,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 22.589376199999997,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 694.0501466,
                                "hasRDI": true,
                                "daily": 231.35004886666667,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 655.5381465999999,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 38.512,
                                        "hasRDI": true,
                                        "daily": 154.048,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 197.60254,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 143.753636,
                                "hasRDI": true,
                                "daily": 287.507272,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 1037.32068,
                                "hasRDI": true,
                                "daily": 345.77356,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 7374.940329999999,
                                "hasRDI": true,
                                "daily": 307.2891804166666,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 1660.23806,
                                "hasRDI": true,
                                "daily": 166.02380599999998,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 336.50712,
                                "hasRDI": true,
                                "daily": 84.12678,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 2775.7940799999997,
                                "hasRDI": true,
                                "daily": 79.30840228571427,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 31.9100748,
                                "hasRDI": true,
                                "daily": 177.27819333333335,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 15.8322917,
                                "hasRDI": true,
                                "daily": 105.54861133333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 2025.80988,
                                "hasRDI": true,
                                "daily": 289.40141142857146,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 886.7361099999999,
                                "hasRDI": true,
                                "daily": 98.52623444444443,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 11.09,
                                "hasRDI": true,
                                "daily": 18.483333333333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 5.7586428000000005,
                                "hasRDI": true,
                                "daily": 383.90952,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 4.7333011,
                                "hasRDI": true,
                                "daily": 278.42947647058827,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 49.0224382,
                                "hasRDI": true,
                                "daily": 245.11219100000002,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 1.2834940999999995,
                                "hasRDI": true,
                                "daily": 64.17470499999997,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 1211.53202,
                                "hasRDI": true,
                                "daily": 302.883005,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 4.9254869,
                                "hasRDI": true,
                                "daily": 82.09144833333333,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 10.866016,
                                "hasRDI": true,
                                "daily": 2.716504,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 7.3756827000000005,
                                "hasRDI": true,
                                "daily": 36.87841350000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 27.570000000000004,
                                "hasRDI": true,
                                "daily": 34.462500000000006,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7ec2270eaa2c155c125c14b04c37549e",
                        "label": "Sugared Pepitas",
                        "image": "https://www.edamam.com/web-img/676/67646d77dd6ac1c59c8ffb6d9b5229ec.jpg",
                        "source": "Martha Stewart",
                        "sourceIcon": "http://www.marthastewart.com/sites/all/themes/marthastewart/images/favicon.ico",
                        "url": "http://www.marthastewart.com/348965/sugared-pepitas",
                        "shareAs": "http://www.edamam.com/recipe/sugared-pepitas-7ec2270eaa2c155c125c14b04c37549e/sugar",
                        "yield": 12,
                        "dietLabels": [
                            "Low-Carb",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "1/4 cup water",
                            "3/4 cup sugar",
                            "4 cups unsalted pepitas (hulled pumpkin seeds)",
                            "Coarse salt"
                        ],
                        "ingredients": [
                            {
                                "text": "1/4 cup water",
                                "quantity": 0.25,
                                "measure": "cup",
                                "food": "water",
                                "weight": 59.25
                            },
                            {
                                "text": "3/4 cup sugar",
                                "quantity": 0.75,
                                "measure": "cup",
                                "food": "sugar",
                                "weight": 150
                            },
                            {
                                "text": "4 cups unsalted pepitas (hulled pumpkin seeds)",
                                "quantity": 4,
                                "measure": "cup",
                                "food": "pepitas",
                                "weight": 472
                            },
                            {
                                "text": "Coarse salt",
                                "quantity": 0,
                                "measure": "medium",
                                "food": "coarse salt",
                                "weight": 3.1770587
                            }
                        ],
                        "calories": 3289.7799999999997,
                        "totalWeight": 684.4270587,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 3289.7799999999997,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 231.51599999999996,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 40.30879999999999,
                                "unit": "g"
                            },
                            "FATRN": {
                                "label": "Trans",
                                "quantity": 0.1888,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 74.2456,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 93.69200000000001,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 219.40120000000002,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 30.68,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 155.78879999999998,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 140.8448,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 1320.1944109459998,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 249.479994088,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 2596.6242705870004,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 3722.6141646959995,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 38.175884293710006,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 36.08490205869999,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 5541.28,
                                "unit": "mg"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 8.496,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.3304,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.723,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 20.909599999999998,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.472,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 269.03999999999996,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 2.6432,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 21.24,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 164.489,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 356.1784615384615,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 201.54399999999995,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 73.13373333333334,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 122.72,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 281.6896,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 55.008100456083326,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 24.9479994088,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 649.1560676467501,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 106.36040470559998,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 212.08824607616668,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 240.5660137246666,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 791.6114285714285,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 14.16,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 22.02666666666667,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 42.529411764705884,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 104.54799999999997,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 23.599999999999998,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 67.25999999999999,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 13.216000000000003,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 26.55,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 231.51599999999996,
                                "hasRDI": true,
                                "daily": 356.1784615384615,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 40.30879999999999,
                                        "hasRDI": true,
                                        "daily": 201.54399999999995,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0.1888,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 74.2456,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 93.69200000000001,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 219.40120000000002,
                                "hasRDI": true,
                                "daily": 73.13373333333334,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 188.7212,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 30.68,
                                        "hasRDI": true,
                                        "daily": 122.72,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 155.78879999999998,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 140.8448,
                                "hasRDI": true,
                                "daily": 281.6896,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 1320.1944109459998,
                                "hasRDI": true,
                                "daily": 55.008100456083326,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 249.479994088,
                                "hasRDI": true,
                                "daily": 24.9479994088,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 2596.6242705870004,
                                "hasRDI": true,
                                "daily": 649.1560676467501,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 3722.6141646959995,
                                "hasRDI": true,
                                "daily": 106.36040470559998,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 38.175884293710006,
                                "hasRDI": true,
                                "daily": 212.08824607616668,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 36.08490205869999,
                                "hasRDI": true,
                                "daily": 240.5660137246666,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 5541.28,
                                "hasRDI": true,
                                "daily": 791.6114285714285,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 8.496,
                                "hasRDI": true,
                                "daily": 14.16,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.3304,
                                "hasRDI": true,
                                "daily": 22.02666666666667,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.723,
                                "hasRDI": true,
                                "daily": 42.529411764705884,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 20.909599999999998,
                                "hasRDI": true,
                                "daily": 104.54799999999997,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.472,
                                "hasRDI": true,
                                "daily": 23.599999999999998,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 269.03999999999996,
                                "hasRDI": true,
                                "daily": 67.25999999999999,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 2.6432,
                                "hasRDI": true,
                                "daily": 13.216000000000003,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 21.24,
                                "hasRDI": true,
                                "daily": 26.55,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d682ba418d3bec8897b11f818d3877a0",
                        "label": "Spun Sugar",
                        "image": "https://www.edamam.com/web-img/101/101410cee7a7330d09afa1efab3d3d72.jpg",
                        "source": "Serious Eats",
                        "sourceIcon": "http://www.seriouseats.com/favicon.ico",
                        "url": "http://www.seriouseats.com/recipes/2011/08/how-to-make-spun-sugar-recipe.html",
                        "shareAs": "http://www.edamam.com/recipe/spun-sugar-d682ba418d3bec8897b11f818d3877a0/sugar",
                        "yield": 6,
                        "dietLabels": [
                            "Low-Fat",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "75 grams water",
                            "50 grams light corn syrup",
                            "8 ounces granulated sugar"
                        ],
                        "ingredients": [
                            {
                                "text": "75 grams water",
                                "quantity": 75,
                                "measure": "gram",
                                "food": "water",
                                "weight": 75
                            },
                            {
                                "text": "50 grams light corn syrup",
                                "quantity": 50,
                                "measure": "gram",
                                "food": "light corn syrup",
                                "weight": 50
                            },
                            {
                                "text": "8 ounces granulated sugar",
                                "quantity": 8,
                                "measure": "oz",
                                "food": "granulated sugar",
                                "weight": 226.8
                            }
                        ],
                        "calories": 1019.2160000000001,
                        "totalWeight": 351.8,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 1019.2160000000001,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.1,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 265.14964000000003,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 239.7314,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 36.268,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 11.018,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 1.25,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 5.0360000000000005,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 0.11340000000000001,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 0.25018,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.025,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.022680000000000002,
                                "unit": "mg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 50.960800000000006,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.15384615384615385,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 88.38321333333334,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 1.5111666666666668,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 1.1018000000000001,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 0.3125,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 0.14388571428571428,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 0.6300000000000001,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 1.6678666666666666,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 1.6666666666666667,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 1.3341176470588236,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 0.1,
                                "hasRDI": true,
                                "daily": 0.15384615384615385,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 265.14964000000003,
                                "hasRDI": true,
                                "daily": 88.38321333333334,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 265.14964000000003,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 239.7314,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 36.268,
                                "hasRDI": true,
                                "daily": 1.5111666666666668,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 11.018,
                                "hasRDI": true,
                                "daily": 1.1018000000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 1.25,
                                "hasRDI": true,
                                "daily": 0.3125,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 5.0360000000000005,
                                "hasRDI": true,
                                "daily": 0.14388571428571428,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 0.11340000000000001,
                                "hasRDI": true,
                                "daily": 0.6300000000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 0.25018,
                                "hasRDI": true,
                                "daily": 1.6678666666666666,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.025,
                                "hasRDI": true,
                                "daily": 1.6666666666666667,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.022680000000000002,
                                "hasRDI": true,
                                "daily": 1.3341176470588236,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b6551ce7c2ce2f302ffe6c01a935bf52",
                        "label": "Lillet Sugar-Cube Cocktail",
                        "image": "https://www.edamam.com/web-img/fa0/fa0be62cacfe6032dc512a9261ebca08.jpg",
                        "source": "NY Magazine",
                        "sourceIcon": "http://images.nymag.com/gfx/ico/apple-touch-icon.png",
                        "url": "http://nymag.com/restaurants/articles/recipes/lillet.htm",
                        "shareAs": "http://www.edamam.com/recipe/lillet-sugar-cube-cocktail-b6551ce7c2ce2f302ffe6c01a935bf52/sugar",
                        "yield": 1,
                        "dietLabels": [
                            "Low-Fat",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "3 sugar cubes",
                            "1 ounce lillet blanc",
                            "Dash of angostura bitters",
                            "2-inch-by-3/4-inch strip orange peel",
                            "4 and 1/2 to 5 ounces champagne"
                        ],
                        "ingredients": [
                            {
                                "text": "3 sugar cubes",
                                "quantity": 3,
                                "measure": "cube",
                                "food": "sugar cubes",
                                "weight": 12.6
                            },
                            {
                                "text": "1 ounce lillet blanc",
                                "quantity": 1,
                                "measure": "oz",
                                "food": "lillet",
                                "weight": 28.35
                            },
                            {
                                "text": "Dash of angostura bitters",
                                "quantity": 1,
                                "measure": "dash",
                                "food": "angostura bitters",
                                "weight": 1
                            },
                            {
                                "text": "2-inch-by-3/4-inch strip orange peel",
                                "quantity": 1,
                                "measure": "strip",
                                "food": "orange peel",
                                "weight": 2
                            },
                            {
                                "text": "4 and 1/2 to 5 ounces champagne",
                                "quantity": 4,
                                "measure": "oz",
                                "food": "champagne",
                                "weight": 113.4
                            },
                            {
                                "text": "4 and 1/2 to 5 ounces champagne",
                                "quantity": 2.75,
                                "measure": "oz",
                                "food": "champagne",
                                "weight": 77.9625
                            }
                        ],
                        "calories": 297.24725000000007,
                        "totalWeight": 235.31250000000003,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 297.24725000000007,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.08905,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.028750000000000005,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 0.00627,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 0.029150000000000002,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 27.201605,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 0.212,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 23.540580000000002,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 0.19230375000000002,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 12.032125,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 20.852125,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 20.426750000000002,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 148.884375,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 0.5563887500000001,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 0.24480000000000002,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 36.60625,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 0.42,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 2.72,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.013162125000000002,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.025071250000000003,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 0.24915250000000005,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.09909125000000002,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 2.513625,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 0.005,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 0.7654500000000001,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 14.862362500000003,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.137,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.14375000000000002,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 9.067201666666666,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 0.848,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 0.38460750000000005,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 0.5013385416666667,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 2.0852125,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 5.1066875000000005,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 4.253839285714286,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 3.0910486111111117,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 1.6320000000000001,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 5.229464285714286,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 0.04666666666666667,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 4.533333333333333,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.8774750000000001,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 1.4747794117647062,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 1.2457625,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 4.954562500000001,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 0.62840625,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 0.025,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 0.9568125000000001,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 0.08905,
                                "hasRDI": true,
                                "daily": 0.137,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0.028750000000000005,
                                        "hasRDI": true,
                                        "daily": 0.14375000000000002,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0.00627,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 0.029150000000000002,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 27.201605,
                                "hasRDI": true,
                                "daily": 9.067201666666666,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 26.989605,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 0.212,
                                        "hasRDI": true,
                                        "daily": 0.848,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 23.540580000000002,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 0.19230375000000002,
                                "hasRDI": true,
                                "daily": 0.38460750000000005,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 12.032125,
                                "hasRDI": true,
                                "daily": 0.5013385416666667,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 20.852125,
                                "hasRDI": true,
                                "daily": 2.0852125,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 20.426750000000002,
                                "hasRDI": true,
                                "daily": 5.1066875000000005,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 148.884375,
                                "hasRDI": true,
                                "daily": 4.253839285714286,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 0.5563887500000001,
                                "hasRDI": true,
                                "daily": 3.0910486111111117,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 0.24480000000000002,
                                "hasRDI": true,
                                "daily": 1.6320000000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 36.60625,
                                "hasRDI": true,
                                "daily": 5.229464285714286,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 0.42,
                                "hasRDI": true,
                                "daily": 0.04666666666666667,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 2.72,
                                "hasRDI": true,
                                "daily": 4.533333333333333,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.013162125000000002,
                                "hasRDI": true,
                                "daily": 0.8774750000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.025071250000000003,
                                "hasRDI": true,
                                "daily": 1.4747794117647062,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 0.24915250000000005,
                                "hasRDI": true,
                                "daily": 1.2457625,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.09909125000000002,
                                "hasRDI": true,
                                "daily": 4.954562500000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 2.513625,
                                "hasRDI": true,
                                "daily": 0.62840625,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 0.005,
                                "hasRDI": true,
                                "daily": 0.025,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 0.7654500000000001,
                                "hasRDI": true,
                                "daily": 0.9568125000000001,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ac851596b608486ab13ed156052eee30",
                        "label": "Broiled Grapefruit With Cinnamon Sugar",
                        "image": "https://www.edamam.com/web-img/32d/32d9ab24ac5cb82255f7cc71a665365c.jpg",
                        "source": "The Kitchn",
                        "sourceIcon": "http://a-ec1.apartmenttherapy.com/assets/thekitchn-favicon-99032532706f2a159a33af66c31cf2f2.ico",
                        "url": "http://www.thekitchn.com/breakfast-recipe-broiled-grape-133055",
                        "shareAs": "http://www.edamam.com/recipe/broiled-grapefruit-with-cinnamon-sugar-ac851596b608486ab13ed156052eee30/sugar",
                        "yield": 2,
                        "dietLabels": [
                            "Low-Fat",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "Broiled grapefruit with cinnamon sugar",
                            "1 large ruby grapefruit",
                            "2 tbsps cinnamon sugar"
                        ],
                        "ingredients": [
                            {
                                "text": "Broiled grapefruit with cinnamon sugar",
                                "quantity": 1,
                                "measure": "grapefruit",
                                "food": "cinnamon",
                                "weight": 3
                            },
                            {
                                "text": "1 large ruby grapefruit",
                                "quantity": 1,
                                "measure": "grapefruit",
                                "food": "grapefruit",
                                "weight": 319.8
                            },
                            {
                                "text": "2 tbsps cinnamon sugar",
                                "quantity": 2,
                                "measure": "tbsp",
                                "food": "sugar",
                                "weight": 25.2
                            }
                        ],
                        "calories": 239.25,
                        "totalWeight": 348,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 239.25,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.4849200000000001,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.07416,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 0.07116,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 0.09774,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 61.703340000000004,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 6.7098,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 47.24892,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 2.58216,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 0.552,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 100.66799999999999,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 30.582,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 445.16400000000004,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 0.5180400000000001,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 0.28128000000000003,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 59.484,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 185.934,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 99.8916,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.12852,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.09966,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 0.6795000000000001,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.16440000000000002,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 41.754,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 0.48534,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 0.9359999999999999,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 11.9625,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.7460307692307693,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.3708,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 20.567780000000003,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 26.8392,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 5.16432,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 0.023,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 10.066799999999999,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 7.645500000000001,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 12.718971428571429,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 2.878,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 1.8752000000000002,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 8.497714285714286,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 20.659333333333336,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 166.486,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 8.568,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 5.8623529411764705,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 3.397500000000001,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 8.22,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 10.4385,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 2.4267,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 1.17,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 0.4849200000000001,
                                "hasRDI": true,
                                "daily": 0.7460307692307693,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0.07416,
                                        "hasRDI": true,
                                        "daily": 0.3708,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0.07116,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 0.09774,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 61.703340000000004,
                                "hasRDI": true,
                                "daily": 20.567780000000003,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 54.99354,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 6.7098,
                                        "hasRDI": true,
                                        "daily": 26.8392,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 47.24892,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 2.58216,
                                "hasRDI": true,
                                "daily": 5.16432,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 0.552,
                                "hasRDI": true,
                                "daily": 0.023,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 100.66799999999999,
                                "hasRDI": true,
                                "daily": 10.066799999999999,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 30.582,
                                "hasRDI": true,
                                "daily": 7.645500000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 445.16400000000004,
                                "hasRDI": true,
                                "daily": 12.718971428571429,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 0.5180400000000001,
                                "hasRDI": true,
                                "daily": 2.878,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 0.28128000000000003,
                                "hasRDI": true,
                                "daily": 1.8752000000000002,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 59.484,
                                "hasRDI": true,
                                "daily": 8.497714285714286,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 185.934,
                                "hasRDI": true,
                                "daily": 20.659333333333336,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 99.8916,
                                "hasRDI": true,
                                "daily": 166.486,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.12852,
                                "hasRDI": true,
                                "daily": 8.568,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.09966,
                                "hasRDI": true,
                                "daily": 5.8623529411764705,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 0.6795000000000001,
                                "hasRDI": true,
                                "daily": 3.397500000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.16440000000000002,
                                "hasRDI": true,
                                "daily": 8.22,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 41.754,
                                "hasRDI": true,
                                "daily": 10.4385,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 0.48534,
                                "hasRDI": true,
                                "daily": 2.4267,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 0.9359999999999999,
                                "hasRDI": true,
                                "daily": 1.17,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a36b51f50f102bf5da228af55d2ce040",
                        "label": "Vanilla sugar",
                        "image": "https://www.edamam.com/web-img/4fd/4fdd2336043aa81dd05a4b6a08934402.jpg",
                        "source": "La Cucina Italiana",
                        "sourceIcon": "http://lacucinaitalianamagazine.com/favicon.ico",
                        "url": "http://lacucinaitalianamagazine.com/recipe/vanilla_sugar",
                        "shareAs": "http://www.edamam.com/recipe/vanilla-sugar-a36b51f50f102bf5da228af55d2ce040/sugar",
                        "yield": 6,
                        "dietLabels": [
                            "Low-Fat",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "1 vanilla bean, split lenthwise",
                            "2 cups granulated sugar"
                        ],
                        "ingredients": [
                            {
                                "text": "1 vanilla bean, split lenthwise",
                                "quantity": 1,
                                "measure": "bean",
                                "food": "vanilla bean",
                                "weight": 5
                            },
                            {
                                "text": "2 cups granulated sugar",
                                "quantity": 2,
                                "measure": "cup",
                                "food": "granulated sugar",
                                "weight": 400
                            }
                        ],
                        "calories": 1562.4,
                        "totalWeight": 405,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 1562.4,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.003,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.0005,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 0.0005,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 0.0002,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 400.5525,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 399.8325,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 0.003,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 4.45,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 4.55,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 0.6000000000000001,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 15.4,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 0.20600000000000002,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 0.0455,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 0.30000000000000004,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.0005,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.0445,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 0.021,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.001,
                                "unit": "mg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 78.12,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 0.004615384615384615,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.0025,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 133.5175,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 0.006,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 0.18541666666666667,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 0.455,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 0.15000000000000002,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 0.44,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 1.1444444444444446,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 0.30333333333333334,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 0.042857142857142864,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.03333333333333333,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 2.6176470588235294,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 0.10500000000000001,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.05,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 0.003,
                                "hasRDI": true,
                                "daily": 0.004615384615384615,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0.0005,
                                        "hasRDI": true,
                                        "daily": 0.0025,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0.0005,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 0.0002,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 400.5525,
                                "hasRDI": true,
                                "daily": 133.5175,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 400.5525,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 399.8325,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 0.003,
                                "hasRDI": true,
                                "daily": 0.006,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 4.45,
                                "hasRDI": true,
                                "daily": 0.18541666666666667,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 4.55,
                                "hasRDI": true,
                                "daily": 0.455,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 0.6000000000000001,
                                "hasRDI": true,
                                "daily": 0.15000000000000002,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 15.4,
                                "hasRDI": true,
                                "daily": 0.44,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 0.20600000000000002,
                                "hasRDI": true,
                                "daily": 1.1444444444444446,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 0.0455,
                                "hasRDI": true,
                                "daily": 0.30333333333333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 0.30000000000000004,
                                "hasRDI": true,
                                "daily": 0.042857142857142864,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.0005,
                                "hasRDI": true,
                                "daily": 0.03333333333333333,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.0445,
                                "hasRDI": true,
                                "daily": 2.6176470588235294,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 0.021,
                                "hasRDI": true,
                                "daily": 0.10500000000000001,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.001,
                                "hasRDI": true,
                                "daily": 0.05,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7fb7183211e83c69a81bc4bbd85293e1",
                        "label": "Salt and Sugar Pickles Recipe",
                        "image": "https://www.edamam.com/web-img/db7/db70e0c897f88fa8152e65ff78faf78e.jpg",
                        "source": "Leite's Culinaria",
                        "sourceIcon": "http://leitesculinari.wpengine.netdna-cdn.com/wp-content/themes/leitesv3/images/favicon.ico",
                        "url": "http://leitesculinaria.com/39276/recipes-salt-and-sugar-pickles.html",
                        "shareAs": "http://www.edamam.com/recipe/salt-and-sugar-pickles-recipe-7fb7183211e83c69a81bc4bbd85293e1/sugar",
                        "yield": 4,
                        "dietLabels": [
                            "Low-Fat",
                            "Low-Sodium"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "3 very large radishes",
                            "2 thin daikon radishes",
                            "2 thin-skinned cucumbers with few seeds",
                            "2 pounds seedless watermelon",
                            "1 teaspoon fine sea salt",
                            "1 teaspoon sugar"
                        ],
                        "ingredients": [
                            {
                                "text": "3 very large radishes",
                                "quantity": 3,
                                "measure": "large",
                                "food": "radishes",
                                "weight": 27
                            },
                            {
                                "text": "2 thin daikon radishes",
                                "quantity": 2,
                                "measure": "radish",
                                "food": "radishes",
                                "weight": 9
                            },
                            {
                                "text": "2 thin-skinned cucumbers with few seeds",
                                "quantity": 2,
                                "measure": "cucumber",
                                "food": "cucumbers",
                                "weight": 602
                            },
                            {
                                "text": "2 pounds seedless watermelon",
                                "quantity": 2,
                                "measure": "lb",
                                "food": "seedless watermelon",
                                "weight": 907.184
                            },
                            {
                                "text": "1 teaspoon fine sea salt",
                                "quantity": 1,
                                "measure": "tsp",
                                "food": "fine sea salt",
                                "weight": 0.016561159337427116
                            },
                            {
                                "text": "1 teaspoon sugar",
                                "quantity": 1,
                                "measure": "tsp",
                                "food": "sugar",
                                "weight": 4.2
                            }
                        ],
                        "calories": 384.4692,
                        "totalWeight": 1549.4005611593375,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 384.4692,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 2.058976,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.2821184,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 0.3058552,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 0.648592,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 95.768152,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 7.214736,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 71.16000799999999,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 9.6916224,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 41.612614136000005,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 168.86885467824098,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 172.57856561159338,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 1984.951404892747,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 3.9873962518258135,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 2.2124205611593375,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 251.47024,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 284.11152,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 95.665904,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.3961552,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.37325679999999994,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 2.1740128,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.6288736,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 78.35552,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 0.634192,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 100.10318399999998,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 19.22346,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 3.1676553846153843,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 1.4105919999999998,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 31.922717333333335,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 28.858944,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 19.3832448,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 1.7338589223333334,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 16.886885467824097,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 43.144641402898344,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 56.71289728264991,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 22.152201399032297,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 14.749470407728916,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 35.924319999999994,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 31.567946666666664,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 159.4431733333333,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 26.410346666666666,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 21.956282352941173,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 10.870064,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 31.44368,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 19.58888,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 3.17096,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 125.12897999999998,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 2.058976,
                                "hasRDI": true,
                                "daily": 3.1676553846153843,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0.2821184,
                                        "hasRDI": true,
                                        "daily": 1.4105919999999998,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0.3058552,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 0.648592,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 95.768152,
                                "hasRDI": true,
                                "daily": 31.922717333333335,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 88.553416,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 7.214736,
                                        "hasRDI": true,
                                        "daily": 28.858944,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 71.16000799999999,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 9.6916224,
                                "hasRDI": true,
                                "daily": 19.3832448,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 41.612614136000005,
                                "hasRDI": true,
                                "daily": 1.7338589223333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 168.86885467824098,
                                "hasRDI": true,
                                "daily": 16.886885467824097,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 172.57856561159338,
                                "hasRDI": true,
                                "daily": 43.144641402898344,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 1984.951404892747,
                                "hasRDI": true,
                                "daily": 56.71289728264991,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 3.9873962518258135,
                                "hasRDI": true,
                                "daily": 22.152201399032297,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 2.2124205611593375,
                                "hasRDI": true,
                                "daily": 14.749470407728916,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 251.47024,
                                "hasRDI": true,
                                "daily": 35.924319999999994,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 284.11152,
                                "hasRDI": true,
                                "daily": 31.567946666666664,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 95.665904,
                                "hasRDI": true,
                                "daily": 159.4431733333333,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.3961552,
                                "hasRDI": true,
                                "daily": 26.410346666666666,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.37325679999999994,
                                "hasRDI": true,
                                "daily": 21.956282352941173,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 2.1740128,
                                "hasRDI": true,
                                "daily": 10.870064,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.6288736,
                                "hasRDI": true,
                                "daily": 31.44368,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 78.35552,
                                "hasRDI": true,
                                "daily": 19.58888,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 0.634192,
                                "hasRDI": true,
                                "daily": 3.17096,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 100.10318399999998,
                                "hasRDI": true,
                                "daily": 125.12897999999998,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4bf8b809c4af0dfbaba48cc144e87133",
                        "label": "Pickled sugar snap peas",
                        "image": "https://www.edamam.com/web-img/fb2/fb2336e9d0b626af294d709af94c016b.jpg",
                        "source": "Smitten Kitchen",
                        "sourceIcon": "http://smittenkitchen.com/uploads/favicon.ico",
                        "url": "http://smittenkitchen.com/blog/2009/06/pickled-sugar-snap-peas/",
                        "shareAs": "http://www.edamam.com/recipe/pickled-sugar-snap-peas-4bf8b809c4af0dfbaba48cc144e87133/sugar",
                        "yield": 4,
                        "dietLabels": [
                            "High-Fiber",
                            "Low-Fat"
                        ],
                        "healthLabels": [
                            "Vegan",
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Egg-Free",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "1 1/4 cups white distilled vinegar",
                            "1 1/4 cups cold water",
                            "1 tablespoon kosher or pickling salt",
                            "1 tablespoon sugar",
                            "1 pound sugar snap peas, stems trimmed and strings removed",
                            "4 garlic cloves, sliced",
                            "1 or 2 small dried chile peppers, slit lengthwise or a couple pinches dried red pepper flakes"
                        ],
                        "ingredients": [
                            {
                                "text": "1 1/4 cups white distilled vinegar",
                                "quantity": 1.25,
                                "measure": "cup",
                                "food": "vinegar",
                                "weight": 297.5
                            },
                            {
                                "text": "1 1/4 cups cold water",
                                "quantity": 1.25,
                                "measure": "cup",
                                "food": "water",
                                "weight": 296.25
                            },
                            {
                                "text": "1 tablespoon kosher or pickling salt",
                                "quantity": 1,
                                "measure": "tbsp",
                                "food": "salt",
                                "weight": 14.668804
                            },
                            {
                                "text": "1 tablespoon sugar",
                                "quantity": 1,
                                "measure": "tbsp",
                                "food": "sugar",
                                "weight": 12.6
                            },
                            {
                                "text": "1 pound sugar snap peas, stems trimmed and strings removed",
                                "quantity": 1,
                                "measure": "lb",
                                "food": "sugar snap peas",
                                "weight": 453.592
                            },
                            {
                                "text": "4 garlic cloves, sliced",
                                "quantity": 4,
                                "measure": "clove",
                                "food": "garlic",
                                "weight": 12
                            },
                            {
                                "text": "1 or 2 small dried chile peppers, slit lengthwise or a couple pinches dried red pepper flakes",
                                "quantity": 1,
                                "measure": "small",
                                "food": "dried chile peppers",
                                "weight": 37
                            }
                        ],
                        "calories": 430.58064,
                        "totalWeight": 1123.4256040335,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 430.58064,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 3.1168839999999998,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 0.44537760000000004,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 0.26211840000000003,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 1.5275736,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 76.778076,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 22.664392,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 46.149680000000004,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 17.378376,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 5685.334931303903,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 263.75412496803995,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 150.504416040335,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 1654.56468832268,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 12.01685949331055,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 1.8164170040335,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 329.49376,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 734.8196800000001,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 287.51719999999995,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 0.733988,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 0.8213336,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 6.009752000000001,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 1.1730472,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 209.73864,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 2.9404088,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 153.636,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 21.529032,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 4.795206153846154,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 2.226888,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 25.592692,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 90.657568,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 34.756752,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 236.88895547099597,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 26.375412496803992,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 37.62610401008375,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 47.27327680921943,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 66.76033051839195,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 12.109446693556666,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 47.07053714285715,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 81.64663111111112,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 479.1953333333332,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 48.93253333333333,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 48.313741176470586,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 30.048760000000005,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 58.65236,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 52.43466,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 14.702044,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 192.04500000000002,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 3.1168839999999998,
                                "hasRDI": true,
                                "daily": 4.795206153846154,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 0.44537760000000004,
                                        "hasRDI": true,
                                        "daily": 2.226888,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 0.26211840000000003,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 1.5275736,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 76.778076,
                                "hasRDI": true,
                                "daily": 25.592692,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 54.113684,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 22.664392,
                                        "hasRDI": true,
                                        "daily": 90.657568,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 46.149680000000004,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 17.378376,
                                "hasRDI": true,
                                "daily": 34.756752,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 5685.334931303903,
                                "hasRDI": true,
                                "daily": 236.88895547099597,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 263.75412496803995,
                                "hasRDI": true,
                                "daily": 26.375412496803992,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 150.504416040335,
                                "hasRDI": true,
                                "daily": 37.62610401008375,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 1654.56468832268,
                                "hasRDI": true,
                                "daily": 47.27327680921943,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 12.01685949331055,
                                "hasRDI": true,
                                "daily": 66.76033051839195,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 1.8164170040335,
                                "hasRDI": true,
                                "daily": 12.109446693556666,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 329.49376,
                                "hasRDI": true,
                                "daily": 47.07053714285715,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 734.8196800000001,
                                "hasRDI": true,
                                "daily": 81.64663111111112,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 287.51719999999995,
                                "hasRDI": true,
                                "daily": 479.1953333333332,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 0.733988,
                                "hasRDI": true,
                                "daily": 48.93253333333333,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 0.8213336,
                                "hasRDI": true,
                                "daily": 48.313741176470586,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 6.009752000000001,
                                "hasRDI": true,
                                "daily": 30.048760000000005,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 1.1730472,
                                "hasRDI": true,
                                "daily": 58.65236,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 209.73864,
                                "hasRDI": true,
                                "daily": 52.43466,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 2.9404088,
                                "hasRDI": true,
                                "daily": 14.702044,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 153.636,
                                "hasRDI": true,
                                "daily": 192.04500000000002,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c03f234f46ae8b89b89bf782baa95d58",
                        "label": "Brown Sugar Rosemary Walnuts",
                        "image": "https://www.edamam.com/web-img/1f0/1f0c72f7984bb7e2028ebf1fa979df0e.jpg",
                        "source": "101 Cookbooks",
                        "sourceIcon": "http://www.101cookbooks.com/favicon.ico",
                        "url": "http://www.101cookbooks.com/archives/brown-sugar-rosemary-walnuts-recipe.html",
                        "shareAs": "http://www.edamam.com/recipe/brown-sugar-rosemary-walnuts-c03f234f46ae8b89b89bf782baa95d58/sugar",
                        "yield": 14,
                        "dietLabels": [
                            "Low-Carb"
                        ],
                        "healthLabels": [
                            "Vegetarian",
                            "Dairy-Free",
                            "Gluten-Free",
                            "Peanut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "1 cup/5 oz/140 g brown sugar or natural cane sugar",
                            "2 teaspoons fine grain sea salt",
                            "1 teaspoon chopped rosemary leaves",
                            "1/4 cup/1 oz/30g sesame seeds",
                            "2 large egg whites",
                            "1 lb/~4 cups shelled walnut halves",
                            "1/3 cup/1 1/2 oz/45 g chopped dried figs, stems trimmed"
                        ],
                        "ingredients": [
                            {
                                "text": "1 cup/5 oz/140 g brown sugar or natural cane sugar",
                                "quantity": 5,
                                "measure": "oz",
                                "food": "sugar",
                                "weight": 141.75
                            },
                            {
                                "text": "2 teaspoons fine grain sea salt",
                                "quantity": 2,
                                "measure": "tsp",
                                "food": "fine grain sea salt",
                                "weight": 9.712037
                            },
                            {
                                "text": "1 teaspoon chopped rosemary leaves",
                                "quantity": 1,
                                "measure": "tsp",
                                "food": "rosemary",
                                "weight": 2
                            },
                            {
                                "text": "1/4 cup/1 oz/30g sesame seeds",
                                "quantity": 1,
                                "measure": "oz",
                                "food": "sesame seeds",
                                "weight": 28.35
                            },
                            {
                                "text": "2 large egg whites",
                                "quantity": 2,
                                "measure": "large",
                                "food": "egg whites",
                                "weight": 66
                            },
                            {
                                "text": "1 lb/~4 cups shelled walnut halves",
                                "quantity": 1,
                                "measure": "lb",
                                "food": "walnut half",
                                "weight": 453.592
                            },
                            {
                                "text": "1/3 cup/1 1/2 oz/45 g chopped dried figs, stems trimmed",
                                "quantity": 1.5,
                                "measure": "oz",
                                "food": "figs",
                                "weight": 42.525
                            }
                        ],
                        "calories": 3745.91818,
                        "totalWeight": 743.6088106334424,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 3745.91818,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 310.22576319999996,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 29.812270399999996,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 45.870105599999995,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 220.20867640000003,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 219.6092832,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 35.251189,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 160.7734662,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 81.6876541,
                                "unit": "g"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 3764.1910553096172,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 750.4479445520262,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 832.5870281063344,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 2356.203064850675,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 17.76946267509036,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 16.338872110633442,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 1764.92332,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 10.43267,
                                "unit": "µg_RAE"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 7.183196000000001,
                                "unit": "mg"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 1.7949328000000002,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 1.0706654999999998,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 6.6131154,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 2.6846801000000005,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 479.39115999999996,
                                "unit": "µg"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 0.0594,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 3.2927965,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 14.245659000000002,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 187.29590900000002,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 477.27040492307685,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 149.061352,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 73.2030944,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 141.004756,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 163.3753082,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 156.84129397123405,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 75.04479445520262,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 208.14675702658357,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 67.32008756716215,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 98.71923708383534,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 108.92581407088961,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 252.1319028571429,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 1.1591855555555557,
                                "unit": "%"
                            },
                            "VITC": {
                                "label": "Vitamin C",
                                "quantity": 11.971993333333334,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 119.66218666666668,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 62.980323529411756,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 33.065577000000005,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 134.23400500000002,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 119.84778999999999,
                                "unit": "%"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 0.9900000000000001,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 16.4639825,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 17.80707375,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 310.22576319999996,
                                "hasRDI": true,
                                "daily": 477.27040492307685,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 29.812270399999996,
                                        "hasRDI": true,
                                        "daily": 149.061352,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 0,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 45.870105599999995,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 220.20867640000003,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 219.6092832,
                                "hasRDI": true,
                                "daily": 73.2030944,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 184.35809419999998,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 35.251189,
                                        "hasRDI": true,
                                        "daily": 141.004756,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 160.7734662,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 81.6876541,
                                "hasRDI": true,
                                "daily": 163.3753082,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 3764.1910553096172,
                                "hasRDI": true,
                                "daily": 156.84129397123405,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 750.4479445520262,
                                "hasRDI": true,
                                "daily": 75.04479445520262,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 832.5870281063344,
                                "hasRDI": true,
                                "daily": 208.14675702658357,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 2356.203064850675,
                                "hasRDI": true,
                                "daily": 67.32008756716215,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 17.76946267509036,
                                "hasRDI": true,
                                "daily": 98.71923708383534,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 16.338872110633442,
                                "hasRDI": true,
                                "daily": 108.92581407088961,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 1764.92332,
                                "hasRDI": true,
                                "daily": 252.1319028571429,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 10.43267,
                                "hasRDI": true,
                                "daily": 1.1591855555555557,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 7.183196000000001,
                                "hasRDI": true,
                                "daily": 11.971993333333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 1.7949328000000002,
                                "hasRDI": true,
                                "daily": 119.66218666666668,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 1.0706654999999998,
                                "hasRDI": true,
                                "daily": 62.980323529411756,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 6.6131154,
                                "hasRDI": true,
                                "daily": 33.065577000000005,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 2.6846801000000005,
                                "hasRDI": true,
                                "daily": 134.23400500000002,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 479.39115999999996,
                                "hasRDI": true,
                                "daily": 119.84778999999999,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 0.0594,
                                "hasRDI": true,
                                "daily": 0.9900000000000001,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 3.2927965,
                                "hasRDI": true,
                                "daily": 16.4639825,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 14.245659000000002,
                                "hasRDI": true,
                                "daily": 17.80707375,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                },
                {
                    "recipe": {
                        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cefd2800527fa25a55d3c5c3bf92680a",
                        "label": "Sugar Saucers",
                        "image": "https://www.edamam.com/web-img/177/177d0753d164f10935a06b1c485c7d56.jpg",
                        "source": "Lottie + Doof",
                        "sourceIcon": "http://www.lottieanddoof.com/wp-content/themes/lottieanddoof/images/favicon.png",
                        "url": "http://www.lottieanddoof.com/2013/01/sugar-saucers/",
                        "shareAs": "http://www.edamam.com/recipe/sugar-saucers-cefd2800527fa25a55d3c5c3bf92680a/sugar",
                        "yield": 22,
                        "dietLabels": [],
                        "healthLabels": [
                            "Vegetarian",
                            "Peanut-Free",
                            "Tree-Nut-Free",
                            "Soy-Free",
                            "Fish-Free",
                            "Shellfish-Free"
                        ],
                        "cautions": [],
                        "ingredientLines": [
                            "4 cups (600g) all-purpose flour",
                            "1 tsp baking soda",
                            "3/4 tsp kosher salt",
                            "1 1/2 cups (340g) unsalted butter, at room temperature",
                            "1/2 cup (120ml) canola oil",
                            "1 cup (225g) granulated sugar",
                            "1 cup (200g) confectioners’ sugar",
                            "2 large eggs",
                            "4 tsps vanilla extract",
                            "Rainbow sprinkles, for decorating"
                        ],
                        "ingredients": [
                            {
                                "text": "4 cups (600g) all-purpose flour",
                                "quantity": 600,
                                "measure": "gram",
                                "food": "all purpose flour",
                                "weight": 600
                            },
                            {
                                "text": "1 tsp baking soda",
                                "quantity": 1,
                                "measure": "tsp",
                                "food": "baking soda",
                                "weight": 4.6
                            },
                            {
                                "text": "3/4 tsp kosher salt",
                                "quantity": 0.75,
                                "measure": "tsp",
                                "food": "kosher salt",
                                "weight": 4.5
                            },
                            {
                                "text": "1 1/2 cups (340g) unsalted butter, at room temperature",
                                "quantity": 340,
                                "measure": "gram",
                                "food": "unsalted butter",
                                "weight": 340
                            },
                            {
                                "text": "1/2 cup (120ml) canola oil",
                                "quantity": 0.5,
                                "measure": "cup",
                                "food": "canola oil",
                                "weight": 109
                            },
                            {
                                "text": "1 cup (225g) granulated sugar",
                                "quantity": 225,
                                "measure": "gram",
                                "food": "granulated sugar",
                                "weight": 225
                            },
                            {
                                "text": "1 cup (200g) confectioners’ sugar",
                                "quantity": 200,
                                "measure": "gram",
                                "food": "confectioner' sugar",
                                "weight": 200
                            },
                            {
                                "text": "2 large eggs",
                                "quantity": 2,
                                "measure": "large",
                                "food": "eggs",
                                "weight": 100
                            },
                            {
                                "text": "4 tsps vanilla extract",
                                "quantity": 4,
                                "measure": "tsp",
                                "food": "vanilla extract",
                                "weight": 16.8
                            }
                        ],
                        "calories": 7425.494,
                        "totalWeight": 1599.8999999999999,
                        "totalNutrients": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 7425.494,
                                "unit": "kcal"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 400.17408,
                                "unit": "g"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 186.66808,
                                "unit": "g"
                            },
                            "FATRN": {
                                "label": "Trans",
                                "quantity": 11.5731,
                                "unit": "g"
                            },
                            "FAMS": {
                                "label": "Monounsaturated",
                                "quantity": 144.56398000000002,
                                "unit": "g"
                            },
                            "FAPU": {
                                "label": "Polyunsaturated",
                                "quantity": 45.379272,
                                "unit": "g"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 885.4042,
                                "unit": "g"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 16.200000000000003,
                                "unit": "g"
                            },
                            "SUGAR": {
                                "label": "Sugars",
                                "quantity": 424.48920000000004,
                                "unit": "g"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 77.44008000000001,
                                "unit": "g"
                            },
                            "CHOLE": {
                                "label": "Cholesterol",
                                "quantity": 1103,
                                "unit": "mg"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 3201.8320000000003,
                                "unit": "mg"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 234.77800000000002,
                                "unit": "mg"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 152.861,
                                "unit": "mg"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 895.3240000000001,
                                "unit": "mg"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 29.92551,
                                "unit": "mg"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 5.861479999999999,
                                "unit": "mg"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 928.6080000000001,
                                "unit": "mg"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 2485.6,
                                "unit": "µg_RAE"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 4.7386800000000004,
                                "unit": "mg"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 3.54962,
                                "unit": "mg"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 35.67656000000001,
                                "unit": "mg"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 0.42356,
                                "unit": "mg"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 1155.2,
                                "unit": "µg"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 1.468,
                                "unit": "µg"
                            },
                            "VITD": {
                                "label": "Vitamin D",
                                "quantity": 7.1,
                                "unit": "µg"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 29.3494,
                                "unit": "mg"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 103.617,
                                "unit": "µg"
                            }
                        },
                        "totalDaily": {
                            "ENERC_KCAL": {
                                "label": "Energy",
                                "quantity": 371.2747,
                                "unit": "%"
                            },
                            "FAT": {
                                "label": "Fat",
                                "quantity": 615.6524307692308,
                                "unit": "%"
                            },
                            "FASAT": {
                                "label": "Saturated",
                                "quantity": 933.3404,
                                "unit": "%"
                            },
                            "CHOCDF": {
                                "label": "Carbs",
                                "quantity": 295.1347333333333,
                                "unit": "%"
                            },
                            "FIBTG": {
                                "label": "Fiber",
                                "quantity": 64.80000000000001,
                                "unit": "%"
                            },
                            "PROCNT": {
                                "label": "Protein",
                                "quantity": 154.88016000000002,
                                "unit": "%"
                            },
                            "CHOLE": {
                                "label": "Cholesterol",
                                "quantity": 367.6666666666667,
                                "unit": "%"
                            },
                            "NA": {
                                "label": "Sodium",
                                "quantity": 133.40966666666668,
                                "unit": "%"
                            },
                            "CA": {
                                "label": "Calcium",
                                "quantity": 23.477800000000002,
                                "unit": "%"
                            },
                            "MG": {
                                "label": "Magnesium",
                                "quantity": 38.21525,
                                "unit": "%"
                            },
                            "K": {
                                "label": "Potassium",
                                "quantity": 25.580685714285718,
                                "unit": "%"
                            },
                            "FE": {
                                "label": "Iron",
                                "quantity": 166.25283333333334,
                                "unit": "%"
                            },
                            "ZN": {
                                "label": "Zinc",
                                "quantity": 39.07653333333333,
                                "unit": "%"
                            },
                            "P": {
                                "label": "Phosphorus",
                                "quantity": 132.6582857142857,
                                "unit": "%"
                            },
                            "VITA_RAE": {
                                "label": "Vitamin A",
                                "quantity": 276.1777777777778,
                                "unit": "%"
                            },
                            "THIA": {
                                "label": "Thiamin (B1)",
                                "quantity": 315.91200000000003,
                                "unit": "%"
                            },
                            "RIBF": {
                                "label": "Riboflavin (B2)",
                                "quantity": 208.80117647058825,
                                "unit": "%"
                            },
                            "NIA": {
                                "label": "Niacin (B3)",
                                "quantity": 178.38280000000003,
                                "unit": "%"
                            },
                            "VITB6A": {
                                "label": "Vitamin B6",
                                "quantity": 21.178,
                                "unit": "%"
                            },
                            "FOL": {
                                "label": "Folic Acid (B9)",
                                "quantity": 288.8,
                                "unit": "%"
                            },
                            "VITB12": {
                                "label": "Vitamin B12",
                                "quantity": 24.46666666666667,
                                "unit": "%"
                            },
                            "VITD": {
                                "label": "Vitamin D",
                                "quantity": 1.775,
                                "unit": "%"
                            },
                            "TOCPHA": {
                                "label": "Vitamin E",
                                "quantity": 146.747,
                                "unit": "%"
                            },
                            "VITK1": {
                                "label": "Vitamin K",
                                "quantity": 129.52125,
                                "unit": "%"
                            }
                        },
                        "digest": [
                            {
                                "label": "Fat",
                                "tag": "FAT",
                                "schemaOrgTag": "fatContent",
                                "total": 400.17408,
                                "hasRDI": true,
                                "daily": 615.6524307692308,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Saturated",
                                        "tag": "FASAT",
                                        "schemaOrgTag": "saturatedFatContent",
                                        "total": 186.66808,
                                        "hasRDI": true,
                                        "daily": 933.3404,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Trans",
                                        "tag": "FATRN",
                                        "schemaOrgTag": "transFatContent",
                                        "total": 11.5731,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Monounsaturated",
                                        "tag": "FAMS",
                                        "schemaOrgTag": null,
                                        "total": 144.56398000000002,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Polyunsaturated",
                                        "tag": "FAPU",
                                        "schemaOrgTag": null,
                                        "total": 45.379272,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Carbs",
                                "tag": "CHOCDF",
                                "schemaOrgTag": "carbohydrateContent",
                                "total": 885.4042,
                                "hasRDI": true,
                                "daily": 295.1347333333333,
                                "unit": "g",
                                "sub": [
                                    {
                                        "label": "Carbs (net)",
                                        "tag": "CHOCDF.net",
                                        "schemaOrgTag": null,
                                        "total": 869.2041999999999,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Fiber",
                                        "tag": "FIBTG",
                                        "schemaOrgTag": "fiberContent",
                                        "total": 16.200000000000003,
                                        "hasRDI": true,
                                        "daily": 64.80000000000001,
                                        "unit": "g"
                                    },
                                    {
                                        "label": "Sugars",
                                        "tag": "SUGAR",
                                        "schemaOrgTag": "sugarContent",
                                        "total": 424.48920000000004,
                                        "hasRDI": false,
                                        "daily": 0,
                                        "unit": "g"
                                    }
                                ]
                            },
                            {
                                "label": "Protein",
                                "tag": "PROCNT",
                                "schemaOrgTag": "proteinContent",
                                "total": 77.44008000000001,
                                "hasRDI": true,
                                "daily": 154.88016000000002,
                                "unit": "g"
                            },
                            {
                                "label": "Cholesterol",
                                "tag": "CHOLE",
                                "schemaOrgTag": "cholesterolContent",
                                "total": 1103,
                                "hasRDI": true,
                                "daily": 367.6666666666667,
                                "unit": "mg"
                            },
                            {
                                "label": "Sodium",
                                "tag": "NA",
                                "schemaOrgTag": "sodiumContent",
                                "total": 3201.8320000000003,
                                "hasRDI": true,
                                "daily": 133.40966666666668,
                                "unit": "mg"
                            },
                            {
                                "label": "Calcium",
                                "tag": "CA",
                                "schemaOrgTag": null,
                                "total": 234.77800000000002,
                                "hasRDI": true,
                                "daily": 23.477800000000002,
                                "unit": "mg"
                            },
                            {
                                "label": "Magnesium",
                                "tag": "MG",
                                "schemaOrgTag": null,
                                "total": 152.861,
                                "hasRDI": true,
                                "daily": 38.21525,
                                "unit": "mg"
                            },
                            {
                                "label": "Potassium",
                                "tag": "K",
                                "schemaOrgTag": null,
                                "total": 895.3240000000001,
                                "hasRDI": true,
                                "daily": 25.580685714285718,
                                "unit": "mg"
                            },
                            {
                                "label": "Iron",
                                "tag": "FE",
                                "schemaOrgTag": null,
                                "total": 29.92551,
                                "hasRDI": true,
                                "daily": 166.25283333333334,
                                "unit": "mg"
                            },
                            {
                                "label": "Zinc",
                                "tag": "ZN",
                                "schemaOrgTag": null,
                                "total": 5.861479999999999,
                                "hasRDI": true,
                                "daily": 39.07653333333333,
                                "unit": "mg"
                            },
                            {
                                "label": "Phosphorus",
                                "tag": "P",
                                "schemaOrgTag": null,
                                "total": 928.6080000000001,
                                "hasRDI": true,
                                "daily": 132.6582857142857,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin A",
                                "tag": "VITA_RAE",
                                "schemaOrgTag": null,
                                "total": 2485.6,
                                "hasRDI": true,
                                "daily": 276.1777777777778,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin C",
                                "tag": "VITC",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "mg"
                            },
                            {
                                "label": "Thiamin (B1)",
                                "tag": "THIA",
                                "schemaOrgTag": null,
                                "total": 4.7386800000000004,
                                "hasRDI": true,
                                "daily": 315.91200000000003,
                                "unit": "mg"
                            },
                            {
                                "label": "Riboflavin (B2)",
                                "tag": "RIBF",
                                "schemaOrgTag": null,
                                "total": 3.54962,
                                "hasRDI": true,
                                "daily": 208.80117647058825,
                                "unit": "mg"
                            },
                            {
                                "label": "Niacin (B3)",
                                "tag": "NIA",
                                "schemaOrgTag": null,
                                "total": 35.67656000000001,
                                "hasRDI": true,
                                "daily": 178.38280000000003,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin B6",
                                "tag": "VITB6A",
                                "schemaOrgTag": null,
                                "total": 0.42356,
                                "hasRDI": true,
                                "daily": 21.178,
                                "unit": "mg"
                            },
                            {
                                "label": "Folic Acid (B9)",
                                "tag": "FOL",
                                "schemaOrgTag": null,
                                "total": 1155.2,
                                "hasRDI": true,
                                "daily": 288.8,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin B12",
                                "tag": "VITB12",
                                "schemaOrgTag": null,
                                "total": 1.468,
                                "hasRDI": true,
                                "daily": 24.46666666666667,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin D",
                                "tag": "VITD",
                                "schemaOrgTag": null,
                                "total": 7.1,
                                "hasRDI": true,
                                "daily": 1.775,
                                "unit": "µg"
                            },
                            {
                                "label": "Vitamin E",
                                "tag": "TOCPHA",
                                "schemaOrgTag": null,
                                "total": 29.3494,
                                "hasRDI": true,
                                "daily": 146.747,
                                "unit": "mg"
                            },
                            {
                                "label": "Vitamin K",
                                "tag": "VITK1",
                                "schemaOrgTag": null,
                                "total": 103.617,
                                "hasRDI": true,
                                "daily": 129.52125,
                                "unit": "µg"
                            }
                        ]
                    },
                    "bookmarked": false,
                    "bought": false
                }
            ]
        };
        var list = data.hits;
        Builddivs(list);
    }
    else {
        $.ajax({
            url: "https://edamam-recipe-search-and-diet-v1.p.mashape.com/search",
            beforeSend: function (xhrObj) {
                //     // Request headers
                //     xhrObj.setRequestHeader("app_id", "4d184a43");
                //     xhrObj.setRequestHeader("app_key", "80e956f0544de255e27075a862bd3d5d");
                xhrObj.setRequestHeader("X-Mashape-Key", "gMNslw2jxxmshodWJPKB2XVI1q0Ap1pJEWcjsnC4yxXj4J858U");
                xhrObj.setRequestHeader("Accept", "application/json");
                xhrObj.setRequestHeader("_app_id", "4d184a43");
                xhrObj.setRequestHeader("_app_key", "80e956f0544de255e27075a862bd3d5d");
            },
            data: { "q": a },
            type: "GET",
            dataType: 'json',
            success: function (dataFromServer) {
                var list = dataFromServer.hits;
                Builddivs(list);
            },
        });
    }
}
function Builddivs(list) {
    var array = new Array(0);
    var count = list.length;
    for (var i = 0; i < 10; i++) {
        var p = list[i];
        title = p.recipe.label;
        imgurl = p.recipe.image;
        href = p.recipe.url;
        array.push("<div class='pin'><a href='" + href + "'><img src='" + imgurl + "'/></a><p>" + title + "</p> </div>");
    }
    var html = array.join("");
    $("#columns").html(html);
}
//# sourceMappingURL=recipeJs.js.map