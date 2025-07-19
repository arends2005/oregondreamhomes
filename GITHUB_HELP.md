# oregondreamhomes
Design and build your perfect home with all the best spacing and style gleaned from life experiences

Coding on github with 2 different accounts
Don't use --global  --> git config in the cloned directory, see below
git config --global --list


# First create the keys
ssh-keygen -t rsa -b 4096 -C "your-email@gmail.com" -f ~/.ssh/id_rsa_daddy
ssh-keygen -t rsa -b 4096 -C "your-email@state.edu" -f ~/.ssh/id_rsa_mommy

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_rsa_daddy
ssh-add ~/.ssh/id_rsa_mommy
ssh-add -l

# Add the keys to respective github accounts
cat ~/.ssh/id_rsa_daddy.pub
cat ~/.ssh/id_rsa_mommy.pub

# ################################################
# Create a config file
ls -la ~/.ssh
nano ~/.ssh/config

Host github.com-username09
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_daddy

Host github.com-username2005
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_mommy
# ###############################################

# Clone into local host machine
git clone git@github.com-username2005:username2005/oregondreamhomes.git
# Add git info into the local folder
git config user.name "username2005"
git config user.email "your-email@state.edu"

git config --local --list

# 

---

To create a new branch and test a new feature, follow these steps:

1. **Ensure you're on the `main` branch**:

```bash
git checkout main
```

2. **Pull the latest changes from `main` to ensure it's up to date**:

```bash
git pull origin main
```

3. **Create a new branch for your feature**:
Replace `feature-name` with a descriptive name for your feature.

```bash
git checkout -b feature-name
```

4. **Start working on the new branch**:
Make your changes, add files, and commit as needed:

```bash
git add .
git commit -m "Description of the changes made"
```

5. **Push the branch to the remote repository (if needed)**:

```bash
git push origin feature-name
```


You can now work on your feature independently without affecting the `main` branch. Once your work is complete and tested, you can merge it back into `main`.

# 

---

# merge branch login into main

To merge the "login" branch into the "main" branch, follow these steps:

1. **Switch to the main branch**:

```bash
git checkout main
```

2. **Update the main branch** with the latest changes from the remote repository:

```bash
git pull origin main
```

3. **Merge the login branch** into main:

```bash
git merge login
```

4. **Resolve any conflicts** if they occur. Open the conflicting files, make the necessary changes, and then:

```bash
git add <resolved-file>
git commit -m "Resolve merge conflicts"
```

5. **Push the updated main branch** to the remote repository:

```bash
git push origin main
```