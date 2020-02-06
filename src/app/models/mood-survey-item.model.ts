import { User } from 'firebase';

export interface MoodSurveyItem {
    mood: string,
    grateful: string,
    onyourmind: string,
    date: Date,
    uid: string
}