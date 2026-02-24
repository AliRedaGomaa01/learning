let Docker = () => (
  <pre>
    {`
dos2unix start
*** windows syntax error fix
*
docker builder prune -af
docker image prune -af
*
docker compose up --build
docker compose up -d
*
*
docker ps
*
docker exec -it icr_php bash
*** don't forget to make default install steps 
*** sometimes it's needed to delete node_modules and install it again
    `}
  </pre>
)

export default Docker