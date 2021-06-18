import { BehaviorSubject } from 'rxjs';
import { useBehaviorSubject } from './base';

const subject = new BehaviorSubject(false);

export function useHeaderHidden(): [boolean, (newHidden: boolean) => void] {
	return useBehaviorSubject(subject, (mode: boolean) => {
		subject.next(mode);
	});
}
