# Requirements:
1. Check the fast status
2. Start a fast (only if there isn't an active fast) 
3. End a fast (only if there is an active fast)
4. Update an active fast (only if there is an active fast)
5. List all fasts.

## Additional requirements:
- JSON file to act as a database
- Build using OOP concepts
- Branch every new added feature
- Use proper git commit messages, branch names, pull request titles etc
- Add Slobodan as a reviewer


## Anticipated App Progression
Start of CLI:
1. Check status of fasts
2. Prompt menus with options in accordance to status check:
    - If there is an active fast:
        1. Check Fasting Status
        2. End fasting
        3. Update fasting
        4. List all fasts
    - If there isn't an active fast:
        1. Check Fasting Status
        2. Start Fasting
        3. List all fasts
3. Act according to user input:
    1. Check Fast Status:
        - Read db.json
        - Find active Fast:
            - Print Properties
            - If search is failed, print that user isn't fasting.
        - Print options in CLI
    2. Start Fasting
        - Read user input:
            - If invalid:
                - Post respective message
                - Re-print menus with respective options
            - Prompt for Start date:
                - If input invalid, ask again, stating wrong user input.
                - Update new Fast
            - Prompt for Fast Type:
                - If input invalid, ask again, stating wrong user input.
                - Update new Fast
            - Calculate end date
            - Update new Fast
            - Save new state to db.json
            - print successful message
        - Check Status of fasts (leads to print options)
    3. End an Active Fast
        - If input invalid, ask again, stating wrong user input.
        - read from db.json
        - find active fast
            - change status to "false"
            - update db.json
            - print successful message
        - Check Status of fasts (leads to print options)
    4. Update an active Fast
        - If input invalid, ask again, stating wrong user input.
        - read from db.json
        - update:
            - Update start
            - Update fast type
            - calculate new end
            - Update end
            - print successful message
        - Check Status of fasts (leads to print options)
    5. List all Fasts
        - If input is invalid, ask again, stating wrong user input.
        - read from db.json
            - If there are no fasts, print that there are no fasts
            - Print array of fasts along with all of their properties each
        - Check Status of fasts (leads to print options)
