import { User } from 'firebase';

export interface MoodSurveyItem {
    mood: Number,
    grateful: string,
    onyourmind: string,
    date: Date,
    uid: string
}