const city = document.querySelector('#city');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const desc = document.querySelector('#desc');
const info = document.querySelector('#info');
let lang;
const clockDiv = document.querySelector('.clock');
let myTimer; // var for the interval reset
let day;
let dayDiv = document.querySelector('.day');
let weather;


const body = document.querySelector("body")
const button = document.createElement('button');
button.style.display = "none"
body.appendChild(button)

// Functions
function checkStatus(response)
{
    if (response.ok)
    {
        return Promise.resolve(response);
    } else
    {
        return Promise.reject(new Error(response.statusText));
    }
}

function fetchData(url)
{
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log('Looks like there was a problem!', error))
}

function getTime()
{
    function pad(number)
    {
        if (number < 10)
        {
            return '0' + number;
        } else
        {
            return number;
        }
    }

    let now = new Date;
    day = now.getUTCDay();

    function getHH()
    {
        if (now.getUTCHours() + weather.timezone / 3600 >= 24)
        {
            day += 1;

            return now.getUTCHours() + weather.timezone / 3600 - 24;
        } else if (now.getUTCHours() + weather.timezone / 3600 <= 0)
        {
            day -= 1;

            return now.getUTCHours() + weather.timezone / 3600 + 24;
        } else { return now.getUTCHours() + weather.timezone / 3600 }
    }

    let hh = getHH();
    let mm = now.getUTCMinutes();
    let ss = now.getUTCSeconds();

    if (Number.isInteger((hh - 0.5)))
    {
        hh -= 0.5;
        mm += 30;
        if (mm >= 60)
        {
            mm -= 60;
            hh += 1;
        }
    }

    if (hh === 24)
    {
        hh = 0;
        day += 1;
    }
    hh = pad(hh);
    mm = pad(mm);
    ss = pad(ss);

    if (lang === 'hu')
    {
        if (day === 1)
        {
            day = 'Hétfő';
        } else if (day === 2)
        {
            day = 'Kedd';
        } else if (day === 3)
        {
            day = 'Szerda';
        } else if (day === 4)
        {
            day = 'Csütörtök';
        } else if (day === 5)
        {
            day = 'Péntek';
        } else if (day === 6)
        {
            day = 'Szombat';
        } else
        {
            day = 'Vasárnap';
        }
    } else
    {
        if (day === 1)
        {
            day = 'Monday';
        } else if (day === 2)
        {
            day = 'Tuesday';
        } else if (day === 3)
        {
            day = 'Wednesday';
        } else if (day === 4)
        {
            day = 'Thursday';
        } else if (day === 5)
        {
            day = 'Friday';
        } else if (day === 6)
        {
            day = 'Saturday';
        } else
        {
            day = 'Sunday';
        }
    }

    dayDiv.textContent = day;

    return `${hh}:${mm}:${ss}`;
}
function tickClock()
{
    clockDiv.textContent = getTime();
}

function displayResults()
{
    city.innerText = weather.name;
    temp.innerText = weather.main.temp + ' °C';
    desc.innerText = weather.weather[0].description;

    info.style.display = "none";
    city.style.display = "initial";
    icon.style.display = "initial";
    temp.style.display = "initial";
    desc.style.display = "initial";

}

function displayIcon()
{
    if (weather.weather[0].icon === '01d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
    } else if (weather.weather[0].icon === '01n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
    } else if (weather.weather[0].icon === '02d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
    } else if (weather.weather[0].icon === '02n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
    } else if (weather.weather[0].icon === '03d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
    } else if (weather.weather[0].icon === '03n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
    } else if (weather.weather[0].icon === '04d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
    } else if (weather.weather[0].icon === '04n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
    } else if (weather.weather[0].icon === '09d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
    } else if (weather.weather[0].icon === '09n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
    } else if (weather.weather[0].icon === '10d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
    } else if (weather.weather[0].icon === '10n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
    } else if (weather.weather[0].icon === '11d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
    } else if (weather.weather[0].icon === '11n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
    } else if (weather.weather[0].icon === '13d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
    } else if (weather.weather[0].icon === '13n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/13n@2x.png");
    } else if (weather.weather[0].icon === '50d')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
    } else if (weather.weather[0].icon === '50n')
    {
        icon.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
    }
}
// End of Functions

// Ask user to enable geolocation
info.style.display = "initial";
city.style.display = "none";
icon.style.display = "none";
temp.style.display = "none";
desc.style.display = "none";

// Set language
// if (navigator.language === 'hu')
// {
//     lang = 'hu';
//     document.querySelector('input').setAttribute('placeholder', 'Írd be egy város nevét!');
//     document.querySelector('button').innerText = 'Keresés';
//     info.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
// } else
// {
//     lang = 'en';
//     info.innerText = 'Please enable acces to your location or search for a city name!';

// }

// XHR by geolocation
navigator.geolocation.getCurrentPosition(function (position)
{
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;

    fetchData('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&units=metric' + '&lang=' + lang).then(data =>
    {
        weather = data
        myTimer = setInterval(tickClock, 1000);
        displayResults();
        displayIcon();

        // NEW CODE BEGINS HERE
        console.log(data)

        const now = new Date
        console.log(now.getTime())
        let hours = now.getHours()
        let time = Math.floor(now.getTime() / 1000)

        if (hours > 12) hours -= 12

        let minutes = now.getMinutes()
        if (!(minutes >= 10)) minutes = "0" + minutes

        const amORpm = function ()
        {
            if (now.getHours() >= 12) return "pm"
            return "am"
        }()
        greeting = function ()
        {
            if (time >= data.sys.sunrise &&
                amORpm === "am") return "morning"
            else if (time < data.sys.sunset &&
                amORpm === "pm") return "afternoon"
            else return "evening"
        }()
        const day = function ()
        {
            if (now.getDay() === 0) return "Sunday"
            else if (now.getDay() === 1) return "Monday"
            else if (now.getDay() === 2) return "Tuesday"
            else if (now.getDay() === 3) return "Wednesday"
            else if (now.getDay() === 4) return "Thursday"
            else if (now.getDay() === 5) return "Friday"
            else return "Saturday"
        }()

        const weatherStatus = data.weather[0].main.toLowerCase()
        let weatherInfo
        const body = document.querySelector("body")
        const bodyContent = document.querySelector(".bodyContent")

        //background test
        // weatherStatus = "clouds"
        // const greeting = "evening"

        if (weatherStatus === "clear") 
        {
            weatherInfo = "the sky is clear"
            body.style.background = "url(img/clear_sky.jpg)"
            if (greeting === "evening") body.style.background = "url(img/clear_sky_night.jpg)"
        }
        else if (weatherStatus === "clouds")
        {
            weatherInfo = "the weather is cloudy"
            body.style.background = "url(img/clouds.jpg)"
            if (greeting === "evening") body.style.background = "url(img/clouds_night.jpg)"
        }
        else if (weatherStatus === "thunderstorm")
        {
            weatherInfo = "there is a thunderstorm out there"
            body.style.background = "url(img/thunderstorm.jpg)"
            if (greeting === "evening") body.style.background = "url(img/thunderstorm_night.jpg)"
        }
        else if (weatherStatus === "drizzle") 
        {
            weatherInfo = "it's drizzling"
            body.style.background = "url(img/drizzle.jpg)"
            if (greeting === "evening") body.style.background = "url(img/drizzle_night.jpg)"
        }
        else if (weatherStatus === "rain")
        {
            weatherInfo = "it's raining"
            body.style.background = "url(img/rain.jpg)"
            if (greeting === "evening") body.style.background = "url(img/rain_night.jpg)"
        }
        else if (weatherStatus === "snow")
        {
            weatherInfo = "it's snowing"
            body.style.background = "url(img/snow.jpg)"
            if (greeting === "evening") body.style.background = "url(img/snow_night.jpg)"
        }
        else if (weatherStatus === "mist") 
        {
            weatherInfo = "the weather is misty"
            body.style.background = "url(img/mist.jpg)"
            if (greeting === "evening") body.style.background = "url(img/mist_night.jpg)"
        }
        else if (weatherStatus === "fog") 
        {
            weatherInfo = "the weather is foggy"
            body.style.background = "url(img/fog.jpg)"
            if (greeting === "evening") body.style.background = "url(img/fog_night.jpg)"
        }


        const username = "visitor"
        let message = `Good ${greeting}, ${username}! It's ${hours}:${minutes} ${amORpm}, ${day}. The outside temperature is ${data.main.temp} °C, ${weatherInfo}.`

        const year = "year" + now.getFullYear()
        const month = "month" + now.getMonth()
        const date = "date" + now.getDate()


        if (Object.keys(calendar).includes(year))
        {
            if (Object.keys(calendar[year]).includes(month))
            {
                if (Object.keys(calendar[year][month]).includes(date))
                {
                    const message2 = `Today is the ${calendar[year][month][date]}.`
                    message = `${message} ${message2}`

                    if (calendar[year][month][date] === "April Fool's Day" ||
                        calendar[year][month][date] === "Friday the 13th")
                    {
                        const message2 = `Today is ${calendar[year][month][date]}.`
                        message = `${message} ${message2}`
                    }
                }
            }
        }


        document.querySelector(".message").innerText = message
        // TURN ON WHEN FINISHED
        // talk(message)

        bodyContent.style.display = "none"

        const buttonDiv = document.querySelector(".buttonDiv")
        const checkbox = document.querySelector("input")
        console.log(checkbox)

        checkbox.addEventListener("click", () =>
        {

            //bring forward the content
            bodyContent.style.display = "initial"
            buttonDiv.style.transform = "scale(0)"
            buttonDiv.style.transition = "transform 1s ease-out;"
            buttonDiv.style.display = "none"


            if (weatherStatus === "clear") 
            {
                weatherInfo = "the sky is clear"
                bodyContent.style.background = "url(img/clear_sky.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/clear_sky_night.jpg)"
            }
            else if (weatherStatus === "clouds")
            {
                weatherInfo = "the weather is cloudy"
                bodyContent.style.background = "url(img/clouds.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/clouds_night.jpg)"
            }
            else if (weatherStatus === "thunderstorm")
            {
                weatherInfo = "there is a thunderstorm out there"
                bodyContent.style.background = "url(img/thunderstorm.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/thunderstorm_night.jpg)"
            }
            else if (weatherStatus === "drizzle") 
            {
                weatherInfo = "it's drizzling"
                bodyContent.style.background = "url(img/drizzle.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/drizzle_night.jpg)"
            }
            else if (weatherStatus === "rain")
            {
                weatherInfo = "it's raining"
                bodyContent.style.background = "url(img/rain.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/rain_night.jpg)"
            }
            else if (weatherStatus === "snow")
            {
                weatherInfo = "it's snowing"
                bodyContent.style.background = "url(img/snow.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/snow_night.jpg)"
            }
            else if (weatherStatus === "mist") 
            {
                weatherInfo = "the weather is misty"
                bodyContent.style.background = "url(img/mist.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/mist_night.jpg)"
            }
            else if (weatherStatus === "fog") 
            {
                weatherInfo = "the weather is foggy"
                bodyContent.style.background = "url(img/fog.jpg)"
                if (greeting === "evening") bodyContent.style.background = "url(img/fog_night.jpg)"
            }


            talk(message)
        })

    });
})

// If user disabled geolocation
function checkForPermission(error)
{
    if (error.code == error.PERMISSION_DENIED)
    {
        if (navigator.language === 'hu')
        {
            info.innerText = 'Engedélyezz hozzáférést a tartózkodási helyedhez vagy keress egy város neve alapján!';
        } else
        {
            info.innerText = 'Please enable acces to your location or search for a city name!';
        }
        info.style.display = "initial";
        city.style.display = "none";
        icon.style.display = "none";
        temp.style.display = "none";
        desc.style.display = "none";
    }
};
/*
// Search button
button.addEventListener('click', () =>
{
    if (clockDiv.textContent !== '')
    {
        clearInterval(myTimer);
    }

    let input = document.querySelector('input').value;
    // XHR by search

    fetchData('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + '&APPID=7acc8d6ed18a854281620e6f354390a6' + '&lang=' + lang).then(data =>
    {
        weather = data;
        myTimer = setInterval(tickClock, 1000);
        displayResults();
        displayIcon();
    })
})
*/


// TEXT TO SPEECH
const voiceList = document.querySelector('#voiceList')
const txtInput = document.querySelector('.message')
const btnSpeak = document.querySelector('#btnSpeak')

const tts = window.speechSynthesis;
let voices = [];


if (speechSynthesis !== undefined)
{
    speechSynthesis.onvoiceschanged = getVoices;
}

function getVoices()
{
    voices = tts.getVoices();
    voiceList.innerHTML = '';
    voices.forEach((voice) =>
    {
        let listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = 0;
}

function talk()
{
    var msg = new SpeechSynthesisUtterance();

    if (voices.filter(voice => voice.name === "Google UK English Male").length !== 0) 
    {
        voices = voices.filter(voice => voice.name === "Google UK English Male")
    }
    if (voices.filter(voice => voice.name === "Microsoft Guy Online (Natural) - English (United States)").length !== 0) 
    {
        voices = voices.filter(voice => voice.name === "Microsoft Guy Online (Natural) - English (United States)")
    }
    if (voices.filter(voice => voice.name === "Microsoft David Desktop - English (United States)").length !== 0) 
    {
        voices = voices.filter(voice => voice.name === "Microsoft David Desktop - English (United States)")
    }

    msg.voice = voices[0];
    console.log(voices)

    msg.text = document.querySelector(".message").innerText;
    msg.volume = 0.5;
    msg.lang = 'en';
    speechSynthesis.speak(msg);
}


// languages:
// firefox: 2 microsoftos, 2. David
// name: "Microsoft David Desktop - English (United States)"
// edge: mind microsoftos
// name: "Microsoft Guy Online (Natural) - English (United States)"
// chrome
// name: "Google UK English Male"

// CALENDAR
const calendar = {

    year2021:
    {
        month0: {
            date4: "World Braille Day",
            date7: "International Programmers' Day",
            date17: "World Religion Day",
            date26: "International Customs Day",
            date31: "World Leprosy Day"
        },
        month1: {
            date2: "World Wetlands Day",
            date11: "World Day of the Sick"
        },
        month2: {
            date1: "Self-Injury Awareness Day",
            date11: "World Kidney Day",
            date27: "Earth Hour"
        },
        month3: {
            date1: "April Fool's Day",
            date18: "International Day for Monuments and Sites"
        },
        month4: {
            date8: "World Ovarian Cancer Day",
            date12: "International Nurses Day",
            date20: "World Autoimmune / Autoinflammatory Arthritis Day",
            date25: "African Liberation Day"
        },
        month7: {
            date13: "Friday the 13th",
            date31: "International Overdose Awareness Day",
        },
        month8: {
            date4: "World Sexual Health Day",
            date13: "International Programmers' Day",
            date17: "Still's Disease Awareness Day",
            date23: "International Celebrate Bisexuality Day",
            date29: "World Heart Day",
        },

        month9: {
            date1: "World Vegetarian Day",
            date6: "World Cerebral Palsy Day",
            date14: "World Sight Day",
            date29: "World Stroke Day",
        },
        month9: {
            date1: "World Vegan Day",
            date12: "World Pneumonia Day",
            date17: "World Prematurity Day",
            date19: "International Men's Day",
        }
    },
    year2022:
    {
        month0: {
            date4: "World Braille Day",
            date7: "International Programmers' Day",
            date16: "World Religion Day",
            date26: "International Customs Day",
            date30: "World Leprosy Day"
        },
        month1: {
            date2: "World Wetlands Day",
            date11: "World Day of the Sick"
        },
        month2: {
            date1: "Self-Injury Awareness Day",
            date10: "World Kidney Day",
            date26: "Earth Hour"
        },
        month3: {
            date1: "April Fool's Day",
            date18: "International Day for Monuments and Sites"
        },
        month4: {
            date8: "World Ovarian Cancer Day",
            date12: "International Nurses Day",
            date13: "Friday the 13th",
            date20: "World Autoimmune / Autoinflammatory Arthritis Day",
            date25: "African Liberation Day"
        },
        month7: {
            date31: "International Overdose Awareness Day",
        },
        month8: {
            date4: "World Sexual Health Day",
            date13: "International Programmers' Day",
            date17: "Still's Disease Awareness Day",
            date23: "International Celebrate Bisexuality Day",
            date29: "World Heart Day",
        },

        month9: {
            date1: "World Vegetarian Day",
            date6: "World Cerebral Palsy Day",
            date13: "World Sight Day",
            date29: "World Stroke Day",
        },
        month9: {
            date1: "World Vegan Day",
            date12: "World Pneumonia Day",
            date17: "World Prematurity Day",
            date19: "International Men's Day",
        }
    },
    year2023:
    {
        month0: {
            date4: "World Braille Day",
            date7: "International Programmers' Day",
            date13: "Friday the 13th",
            date16: "World Religion Day",
            date26: "International Customs Day",
            date29: "World Leprosy Day"
        },
        month1: {
            date2: "World Wetlands Day",
            date11: "World Day of the Sick"
        },
        month2: {
            date1: "Self-Injury Awareness Day",
            date9: "World Kidney Day",
            date25: "Earth Hour"
        },
        month3: {
            date1: "April Fool's Day",
            date18: "International Day for Monuments and Sites"
        },
        month4: {
            date8: "World Ovarian Cancer Day",
            date12: "International Nurses Day",
            date20: "World Autoimmune / Autoinflammatory Arthritis Day",
            date25: "African Liberation Day"
        },
        month7: {
            date31: "International Overdose Awareness Day",
        },
        month8: {
            date4: "World Sexual Health Day",
            date13: "International Programmers' Day",
            date17: "Still's Disease Awareness Day",
            date23: "International Celebrate Bisexuality Day",
            date29: "World Heart Day",
        },

        month9: {
            date1: "World Vegetarian Day",
            date6: "World Cerebral Palsy Day",
            date12: "World Sight Day",
            date13: "Friday the 13th",
            date29: "World Stroke Day",
        },
        month9: {
            date1: "World Vegan Day",
            date12: "World Pneumonia Day",
            date17: "World Prematurity Day",
            date19: "International Men's Day",
        }
    }
}


/* Birthdays:

Mother: November 29.
Father: May 3.
Milán: February 20.
Viki: July 16.

*/

