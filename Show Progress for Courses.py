#!/bin/python3

from datetime import timedelta as time
from itertools import chain

courses = [
    {'name': "Web Development", 'progress': time(hours=21, minutes=48), 'total': time(hours=73, minutes=30), 'section': "Section:22, Lecture: 235"},
]

exercises = [
#    {'name': "HackerRank: 3 Months Preparation Kit", 'progress': 4+0,   'total': 104+13 , 'section': "Week: 1, Exercise: 4"},
#    {'name': "LeetCode: LeetCode 75 - Level 1",      'progress': 1+0,   'total': 20+10  , 'section': "Day: 1, Exercise: 1"},
#    {'name': "LeetCode: LeetCode 75 - Level 2",      'progress': 0+0+0, 'total': 11+32+2, 'section': "Day: 1, Exercise: 0"},
]

def format_time(timedelta):
    return f"{(timedelta.days*24)+(timedelta.seconds//3600):02d}:{(timedelta.seconds//60)%60:02d}"

def format_percentage(current, total):
    return f"{current/total:.2%}"

def print_courses_and_exercises():
    max_len = max(len(c['name']) for c in chain(courses, exercises)) # Align names of all the courses and exercises so
    for c in chain(courses, exercises):                              # the rest of the data after the titles lines up
        c['name'] += (max_len - len(c['name'])) * " "

    print("-" * 80)
    for c in courses:
        print(f"{c['name']} -> finished {format_time(c['progress'])} out of {format_time(c['total'])} ({c['section']}) ({format_percentage(c['progress'], c['total'])}) ")
    #print()
    for e in exercises:
        print(f"{e['name']} -> finished {e['progress']} out of {e['total']} exercises ({e['section']}) ({format_percentage(e['progress'], e['total'])})")
    print("-" * 80)

    progress_courses    = sum([c['progress'] for c in courses], time()) / sum([c['total'] for c in courses], time())
    #progress_exercises = sum([e['progress'] for e in exercises])       / sum([e['total'] for e in exercises])

    print(f"Finished total {format_percentage(progress_courses, 1)} out of all the courses")
    #print(f"Finished total {format_percentage(progress_exercises, 1)} out of all the exercises\n")
    #print(f"Finished total {format_percentage((progress_courses + progress_exercises) / 2, 1)} overall")
    print("-" * 80 + "\n")

print_courses_and_exercises()