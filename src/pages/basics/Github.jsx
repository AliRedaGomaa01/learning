let Github = () => (
  <pre>
    {`
        # Git is offline software like any programming language 
          ** github is remote cloud for git 

        # Unix-based interface ( bash ) is used in linux  [ default shell ] & mac 
          ** BUT windows uses cmd

        # gitKraken ( good GUI of git )

        # public repo is visible for all 
          ** but private repo is visible for collaborators only 

        # HEAD refers to the last commit on your current branch.

        # default branch on local git on first local commit is master 
          **  but on remote github is main 

        # many branch cases  : 

          ** branch is used to have many code versions & histories at same time
          ** You are in a team => ( branch [member name] for each member  )  
          ** Live Server => branch test server for testing server and not crash it 

        # code status

          Working Area 
            Staging Area
              Local Repository
                Remote Repository

************************************************************************************************ 

        # terminal commands :

          --help  // Top & Best
          pwd ( print working directory  )
          ls -a // show a list of all including hidden files 
          touch new-file.txt
          cat new-file.txt  // catch file and get its content
          mkdir new-folder
          rm deleted-file.txt
          rm -rf deleted-folder // -rf => remove folder
          code . 

************************************************************************************************ 

        # git commands : 
        
            init

            config user.name // get git name 
            config –global user.name “Your Git Name” // set git name globally
            config –global user.email “Your Git Email”

            status // files status

            log  // commit history
            log --oneline // one line commit history

            add file.txt 
            add . 
            add file1.txt file2.txt 
            add folder/ 
            add -u // stage only updates from tracked files only not new nor untracked

            commit // open txt editor to write long msg 
            commit -m “ short message “
            commit --amend // undo last commit
            commit -a -m “ short message “  // make “git add -u” then commit

            branch // view all branches
            branch -r // view all remote branches
            branch <branch-name>  // create new branch 
            branch (-d | -D) <branch-name> // delete branch
            branch ( -m | -M ) <branch-name> // rename ( move to new branch )

            # checkout makes million things  ( use with commits & branches )
            
            checkout  <branch-name>  // change to branch  && discard changes
            checkout  <remote-name>/<branch-name>  
              // change to remote  branch to see something with detached HEAD
            
            checkout HEAD~1 // remove current HEAD one commit before it
            checkout HEAD <file-name> // reset this file to current HEAD
            checkout -- <file-name> // reset this file to last commit
            
            checkout   <frist-7-chars-in-commit-hash>
              // to get a copy of a previous commit  
              // checkout to a previous commit && use detached HEAD
              // then you should move it to new branch to edit
              // then re-attach HEAD by switch and merge

            switch   <branch-name>  // change to branch without discard unstaged changes
            switch  -  // reattach detached HEAD
            switch -c  <branch-name>  // create new branch and switch to it

            merge <branch-name>  // merge this branch to the current branch 

            diff // difference after last commit ( unstaged only )
            diff <--staged OR --cached > // difference after last commit ( staged only )
            diff HEAD < optional file-name > // difference after last commit ( staged & unstaged )
            diff <branch1>..<branch2> // difference between branches
            diff <4abc45>..<commitHex2> // difference between commits

            stash <optional save> 
            // save staged & unstaged changes without a commit
            // used to change branch without errors
            stash pop // return stages changes from inside its branch
            stash apply // return stages changes from inside other branch
            stash list  // view all stashed changes 
            stash apply <stash-id>  // apply specific stash from stash list  ex.stash@{2}
            stash drop <stash-id>  // delete specific stash from stash list  ex.stash@{0}
            stash clear // delete all stashed list

            restore <file-name> 
              // discard unstaged changes after HEAD
            restore --source <commit-hash> <file-name> 
              // restore specific commit file version 
            restore --staged <file-name> 
              // restore staged changes // discard changes after staged
            
            // reset used with local changes 
            reset <commit-hash>  // delete commits after it and put its changes in unstaged
            reset –hard <commit-hash>  // delete commits after it and delete commits' changes
            // undo all staged and unstaged changes : 
            git reset --hard HEAD
            git reset --hard origin/main


            // revert used with remote changes 
            revert <commit-hash>  // reverse commits after it and make new commit for the team

            // rebasing is used to rewrite history ( merging tool or cleanup tool ) 
            /** 
              * commits of current branch will not be added to other branch  
                but commits of current branch will be rewritten to be on tip of the other branch’s commits in the current one only 
              * hash of commits of current will be changes
              * don’t rebase commits that pushed to github because others may have used it
              * interactive rebase enable you to manipulate commits in history like rename or delete or merge  
                ( pick to remain as it OR reword to rename OR fixup to merge with previous and delete previous )
            */

            rebase <other-branch>  // rewrite current branch’s commits from other
            rebase -i HEAD~4  // go to interactive mode 4 commits before end in HEAD

************************************************************************************************ 
      # github : 
        * low update internet speed causes push errors 
        * you can connect to github using tokens OR SSH ( unique device connection ) 

        github gists is similar to github repo but simpler with less features

        github pull request => used to ask the admin to merge your branch with the main one if the policy says this 

        github commands : 

          clone <remote-repo-url>

          config --local user.name “Ali”  // set user name locally for current project
          config --global user.email “a@a.a” // set user email globally for your PC
          config --global alias.sts status // make sts as alisa for status keyword

          remote -v // view current remotes
          remote add <name> <url> 
          remote set-url <name> <url>
          remote rename  <old-name> <new-name>
          remote remove <name>

          push <remote-name> <local-&-remote-branch-name>
          push <remote-name> <local-branch-name>:<remote-branch-name>
          push -u <remote-name> <branch-name> // set upstream to use push only in future
          push // used if we setted upstream usign -u  that save configration

          pull <remote-name> <branch-name>

          fetch <remote-name>  // all remote branches updates 
          fetch <remote-name> <remote-branch>   // one remote branches updates 

          tag // list of all tags in whole repo 
          tag  <new-name>// add new lightweight tag to HEAD
          tag -a <new-name>// add new annotated -explained with message- tag to HEAD
          tag  <new-name> <commit-hash>// add new tag to specific previous commit
          tag  <new-name> <commit-hash> -f // rewrite commit tag
          tag -d <tag-name>// delete specific tag
          // we can write tag name instead of commit hash 
          // there is only 1 tag per 1 commit 
          checkout <tag-name> // show commit of this tag
          show <tag-name> // show tag details
          push origin <tag-name> // push specific tag
          push origin --tags // push all local tags 
          push origin main -f  // force push to the repo  

          clean -Xfdn  // preview ignored files and folders that will be deleted
          clean -Xfd  // delete ignored files and folders

***********************************************************************************************************************

        pull request to GUI merging on github

        We can make branch protection roles 
        
        Fork
          Github can make personal copy of other’s repo and this copy is called fork and is able to make pull request between the two repositories.
          and you can pull from the original origin repo then push to fork upstream repo and pull request from fork to original

        .gitignore 
          file.txt
          folder/  // all directory  &&& if write without ‘/’ will consider it a file  
          *.css   // all css files 

        markdown
          there is markdown docs
          you can reach syntax by examples like search spaCy package repo on github for readme example
          use markdown demo website to see result & examples 
          h1-h6  #-######
          **bold** *italic* `+ `marked` + "  ```  highlighted code ``` " + `  
          ( ctrl  + shift + p ) then choose ( markdown open preview )  

        semantic version release number : majorRelease.minorRelease.patchRelease

        Hashing is one-way function ex “ali” => converted always to “ASFADGFAGFAGF” but “ASFADGFAGFAGF” can’t converted to ali 

        Git used SHA-1  40 digits Hexa

        git save file versions by hashing them 


************************************************************************************************
      # github examples  :
        $ init & push : 
          echo "# MyRepo" >> README.md
          git init
          git add README.md
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://AliRedaGomaa01:token@github.com/haithamabdallah/new-board.git
          git push -u origin main

        $ pull : 
          git init
          git branch -M main
          git remote add origin https://AliRedaGomaa01:token@github.com/haithamabdallah/sky-board.git  
          git pull origin main

        $ ssh connection & ssh key : 
          - search in google "github ssh"  to reach github docs 
          - execute command => ssh-keygen -t ed25519 -C "your_email@example.com"
          - a file will be generated in "/c/Users/YOU/.ssh/id_ALGORITHM"
          - copy the content of this file with extension .pub 
          - put it in your github settings > SSH and GPG keys > new SSH key 


    `}
  </pre>
)

export default Github