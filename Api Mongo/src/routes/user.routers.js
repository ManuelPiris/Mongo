const {Router} = require ("express")
const router = Router();
const profesionalesCtrl = require("../controller/profesionales.controller")
const peliculasCtrl = require("../controller/peliculas.controller")

//PROFESIONALES
// router.get('/', (req,res) =>{
//     res.render("profesionales")
// })
router.get("/profesionales",  profesionalesCtrl.getProfesionales);

router.get("/profesionales/?_id=",  profesionalesCtrl.getProfesionales);

router.post("/profesionales",  profesionalesCtrl.postProfesionales);

router.put("/profesionales",  profesionalesCtrl.putProfesionales);

router.delete("/profesionales",  profesionalesCtrl.deleteProfesionales);


//PELICULAS

router.get("/peliculas", peliculasCtrl.getPeliculas);

// router.get("/peliculas/?_id=", peliculasCtrl.getPeliculas);

router.get("/peliculas/actor", peliculasCtrl.getActoresFromPeliculaId);

router.get("/peliculas/director",  peliculasCtrl.getDirectorsFromPeliculaId);

router.get("/peliculas/guionista", peliculasCtrl.getGuionistasFromPeliculaId);

router.get("/peliculas/productora",  peliculasCtrl.getProducterFromPeliculaId);

router.post("/peliculas", peliculasCtrl.postPeliculas);

router.post("/peliculas/actor",  peliculasCtrl.postPeliculaActor);

router.post("/peliculas/director",  peliculasCtrl.postPeliculaDirector);

router.post("/peliculas/guionista",  peliculasCtrl.postPeliculaGuionista);

router.put("/peliculas",  peliculasCtrl.putPeliculas);

router.delete("/peliculas",  peliculasCtrl.deletePeliculas);

router.delete("/peliculas/actor",  peliculasCtrl.deletePeliculasActor);

router.delete("/peliculas/director",  peliculasCtrl.deletePeliculasDirector);

router.delete("/peliculas/guionista",  peliculasCtrl.deletePeliculasGuionista);


module.exports = router;