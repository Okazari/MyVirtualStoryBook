<?php

namespace MVSB\MyVirtualStoryBookBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * MVSBRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class MVSBRepository extends EntityRepository{
    
    public function addEntityToBase($entity){
        $em = $this->getEntityManager();
        $em->persist($entity);
        $em->flush($entity);
    }
    
    public function flushEntityToBase($entity){
        $em = $this->getEntityManager();
        $em->flush($entity);
    }
    
    public function removeEntityFromBase($entity){
        $em = $this->getEntityManager();
        $em->remove($entity);
        $em->flush($entity);
    }
}
