<div className="manage-candidatures-container">
<Sidebar />
<div className="cards-container">
<main className="dashboard-content">
                <h1>Tableau de Bord</h1>

                <div className="dashboard-widgets">
                    {loading ? (
                        <p>Chargement des statistiques...</p>
                    ) : (
                        <>
                            <div className="widget">
                                <h3>Candidatures en attente</h3>
                                <p>{stats.en_cours}</p>
                            </div>
                            <div className="widget">
                                <h3>Candidatures refusées</h3>
                                <p>{stats.refusees}</p>
                            </div>
                            <div className="widget">
                                <h3>Candidatures acceptées</h3>
                                <p>{stats.acceptees}</p>
                            </div>
                        </>
                    )}
                </div>
            </main>
</div>
</div>