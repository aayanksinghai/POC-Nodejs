const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    //Basic Information
    Name: {
        type: String,
        required: [true, 'Please add your name'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    DOB: {
        type: Date,
        required: [true, 'Please add your Date of Birth']
    },
    MaritalStatus: {
        type: String,
        required: [true, 'Please add your Marital Status'],
        enum: ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed','Annulled']
    },
    Gender: {
        type: String,
        required: [true, 'Please add your gender'],
        enum: ['Male', 'Female']
    },
    MobileNumber: {
        type: String,
        required: [true, 'Please add your mobile number'],
        maxlength: [10, 'Mobile Number can not be more than 10 characters']
    },
    Complexion: {
        type: String,
        required: [true, 'Please add your complexion'],
        enum: ['Light', 'Fair', 'Medium', 'Olive', 'Brown', 'Black']
    },
    BodyType: {
        type: String,
        required: [true,'Please add your body type'],
        enum: ['Thin', 'Fit', 'Average','Fat']
    },
    MotherTongue: {
        type: String,
        required: [true, 'Please add your mother tongue'],
        enum: [
            'Hindi',
            'English',
            'Bengali',
            'Marathi',
            'Telugu',
            'Tamil',
            'Gujarati',
            'Urdu',
            'Bhojpuri',
            'Kannada',
            'Malayalam',
            'Odia',
            'Punjabi',
            'Rajasthani',
            'Chhattisgarhi',
            'Assamese',
            'Maithili',
            'Magadhi/Magahi',
            'Haryanvi',
            'Khortha/Khotta',
            'Marwari',
            'Santali',
            'Kashmiri',
            'Bundeli/Bundel Khandi',
            'Malvi',
            'Sadan/Sadri',
            'Mewari',
            'Awadhi',
            'Wagdi',
            'Lamani/Lambadi',
            'Pahari',
            'Bhili/Bhilodi',
            'Hara/Harauti',
            'Nepali',
            'Gondi',
            'Bagheli/Baghel Khandi',
            'Sambhalpuri',
            'Dogri',
            'Garhwali',
            'Nimadi',
            'Surjapuri',
            'Konkani',
            'Kumauni',
            'Kurukh/Oraon',
            'Tulu',
            'Manipuri',
            'Surgujia',
            'Sindhi',
            'Bagri',
            'Ahirani',
            'Banjari',
            'Brajbhasha',
            'Dhundhari',
            'Bodo/Boro',
            'Ho',
            'Gojri/Gujjari/Gujar',
            'Mundari',
            'Garo',
            'Kangri',
            'Khasi',
            'Kachchhi'
        ]
    },
    Photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    //Children and Height

    //Education & Career
    Education: {
        type: String,
        required: [true, 'Please mention your education'],
        enum: [
            'B.A',
            'B.Arch',
            'B.Com',
            'B.Des',
            'B.E/B.Tech',
            'B.Ed',
            'B.IT',
            'B.Pharma',
            'B.Sc',
            'BAMS',
            'BBA',
            'BCA',
            'BDS',
            'BFA',
            'BHM',
            'BHMS',
            'BJMC',
            'BL/LLB',
            'BPT',
            'BVSc.',
            'CA',
            'CFA',
            'CS',
            'DM',
            'Diploma',
            'High School',
            'ICWA',
            'M.A.',
            'M.Arch',
            'M.Com',
            'M.D.',
            'M.Des',
            'M.E/M.Tech',
            'M.Ed',
            'M.Pharma',
            'M.Phil',
            'M.S(Engineering)',
            'M.S(Medicine)',
            'M.Sc',
            'MBA/PGDM',
            'MBBS',
            'MCA.PGDM',
            'MBBS',
            'MCA.PGDCA',
            'MCh',
            'MDS',
            'MFA',
            'MJMC',
            'ML/LLM',
            'MPT',
            'MSW',
            'MVSc.',
            'Other',
            'Ph.D',
            'Trade School'
        ]
    },
    EducationDetails: {
        type: String,
        required: [true, 'Please add your education details'],
        maxlength: [50, 'Education Details can not be more than 50 characters']
    },
    Occupation: {
        type: String,
        required: [true, 'Please add your occupation'],
        enum: ['Private Sector', 'Government/Public Sector', 'Civil Services', 'Defence', 'Business/Self Employed', 'Not Working']
    },
    OccupationDetails: {
        type: String,
        required: [true, 'Please add your occupation details'],
        maxlength: [50, 'Occupation Details can not be more than 50 characters']
    },
    AnnualIncome: {
        type: String,
        required: [true, 'Please add your annual Income'],
        enum: [
            'No income',
            '0-1 Lac',
            '1-2 Lac',
            '2-3 Lac',
            '3-5 Lac',
            '5-7.5 Lac',
            '7.5-10 Lac',
            '10-15 Lac',
            '15-20 Lac',
            '20-25 Lac',
            '25-30 Lac',
            '30-35 Lac',
            '35-50 Lac',
            '50-70 Lac',
            '70L-1 Cr',
            '1cr above'
        ]
    },

    //Socio-Religious Background
    Religion: {
        type: String,
        required: [true,'Please add your religion'],
        maxlength: [25, 'Religion can not be more than 25 characters']
    },
    Community: {
        type: String,
        required: [true,'Please add your community'],
        maxlength: [25, 'Community can not be more than 25 characters']
    },
    Caste: {
        type: String,
        required: [true,'Please add your caste'],
        maxlength: [25, 'Caste can not be more than 25 characters']
    },
    SubCaste: {
        type: String,
        required: [true,'Please add your sub-caste'],
        maxlength: [25, 'Sub-Caste can not be more than 25 characters']
    },
    FamilyValues: {
        type: String,
        required: [true, 'Please add your family values'],
        enum: ['Traditional', 'Western', 'Nuclear']
    },
    EatingHabits: {
        type: String,
        required: [true, 'Please add your eating habits'],
        enum: ['Vegetarian', 'Non Vegetarian', 'Jain', 'Eggetarian']
    },
    DrinkingHabits: {
        type: String,
        required: [true, 'Please add your drinking habits'],
        enum: ['Yes', 'No', 'Occasionally']
    },
    SmokingHabits: {
        type: String,
        required: [true, 'Please add your smoking habits'],
        enum: ['Yes', 'No', 'Occasionally']
    },

    //Astro Info
    SunSign: {
        type: String,
        required: [true, 'Please add Sun Sign'],
        enum: [
            'Aries/Mesh',
            'Taurus/Vrishabh',
            'Gemini/Mithun',
            'Cancer/Kark',
            'Leo/Simha',
            'Virgo/Kanya',
            'Libra/Tula',
            'Scorpia/Vrishchick',
            'Sagittarius/Dhanu',
            'Capricon/Makar',
            'Aqarius/Kumbh',
            'Pisces/Meen'
        ]
    },
    Time: {
        type: String,
        required: [true, 'Please add your birth time']
    },
    Country: {
        type: String,
        required: [true, 'Please add your birth country']
    },
    City: {
        type: String,
        required: [true, 'Please add your birth city']
    },
    Manglik: {
        type: String,
        required: [true, 'Please mention manglik status'],
        enum: ['Manglik', 'Non Manglik', 'Angshik (partial manglik)']
    },

    // Location
    Citizenship: {
        type: String,
        required: [true, 'Please add your citizenship'],
        maxlength: [30, 'Citizenship status can not be more than 30 characters']
    },
    ResidentialStatus: {
        type: String,
        required: [true, 'Please add your residential status'],
        maxlength: [30, 'Residential status can not be more than 30 characters']
    },
    CurrentResidence: {
        type: String,
        required: [true, 'Please add your current residence'],
        maxlength: [30, 'Current Residence can not be more than 30 characters']
    }

})

module.exports = mongoose.model('User', UserSchema)