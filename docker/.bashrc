export PATH="./docker/bin:../docker/bin:../../docker/bin:$PATH"

export PROJECT_ROOT="$PWD"
export NVM_DIR="$PWD/.nvm"
[[ -s "/usr/local/opt/nvm/nvm.sh" ]] && . "/usr/local/opt/nvm/nvm.sh"
[[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ]] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"

_exec() {
  [[ -z "$2" ]] && docker exec -it "$1" bash \
  || docker exec -it "$1" "$2"
}
alias _build="docker-compose build --force-rm --pull"
alias _ps="docker-compose ps"
alias _run="docker-compose run --rm"
alias _stop="docker-compose stop"
alias _up="docker-compose up --detach --force-recreate --remove-orphans"
alias no-start="docker-compose up --no-start --force-recreate --remove-orphans"
alias hadolint="docker-compose run --rm hadolint"
alias node="docker-compose run --rm node"
alias npm="docker-compose run --rm npm"
alias npx="docker-compose run --rm npx"
alias ncu="docker-compose run --rm ncu"
alias gulp="docker-compose run --rm gulp"