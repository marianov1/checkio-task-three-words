"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": "Hello World hello",
            "answer": True,
        },
        {
            "input": "He is 123 man",
            "answer": False,
        },
        {
            "input": "1 2 3 4",
            "answer": False,
        },
        {
            "input": "bla bla bla bla",
            "answer": True,
        },
        {
            "input": "Hi",
            "answer": False,
        },
    ],
    "Extra": [
        {
            "input": "one two 3 four five 6 seven eight 9 ten eleven 12",
            "answer": False,
        },
        {
            "input": "one two 3 four 5 six 7 eight 9 ten eleven 12",
            "answer": False,
        },
        {
            "input": "one two 3 four five six 7 eight 9 ten eleven 12",
            "answer": True,
        },
        {
            "input": "1231 321 3123 12312 3231 321 312 3123 1231",
            "answer": False,
        },
        {
            "input": "sda das das dsa adfs dfasd fas",
            "answer": True,
        },
        {
            "input": "0 qwerty iddqd asdfg ",
            "answer": True,
        },
        {
            "input": "0 qwerty a asdfg 2",
            "answer": True,
        },
        {
            "input": "0 qwerty 99999999999 asdfg 2",
            "answer": False,
        },
        {
            "input": "qwe fds 32 khh wwewe 123 uiu 8794",
            "answer": False,
        },
    ]
}
